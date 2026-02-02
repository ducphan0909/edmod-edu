# Hướng dẫn sử dụng Git

## Cài đặt Git
- Download từ: https://git-scm.com/downloads
- Chọn phiên bản phù hợp với hệ điều hành

## Các lệnh cơ bản

### 1. Khởi tạo repository
```bash
git init                    # Tạo repo mới
git clone <url>            # Clone repo từ GitHub
```

### 2. Cấu hình user
```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

### 3. Quản lý file
```bash
git status                  # Xem trạng thái
git add <file>             # Thêm file cụ thể
git add .                  # Thêm tất cả file
git commit -m "message"    # Lưu thay đổi
```

### 4. Lịch sử
```bash
git log                    # Xem lịch sử chi tiết
git log --oneline          # Xem lịch sử ngắn gọn
```

### 5. Remote repository
```bash
git remote add origin <url>    # Thêm remote
git push origin main          # Push lên GitHub
git pull origin main          # Pull từ GitHub
```

## Branch và Merge

### Tạo và quản lý branch
```bash
git branch                    # Xem branch hiện tại
git branch <tên>             # Tạo branch mới
git checkout <tên>            # Chuyển branch
git checkout -b <tên>         # Tạo và chuyển branch
git branch -d <tên>           # Xóa branch
```

### Merge
```bash
git checkout main             # Chuyển về main
git merge <branch>           # Merge branch vào main
```

## Quy trình làm việc đề xuất

1. **Bắt đầu dự án mới**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <url>
   git push -u origin main
   ```

2. **Làm việc với feature**
   ```bash
   git checkout -b feature-name
   # ... làm việc ...
   git add .
   git commit -m "Add feature"
   git push origin feature-name
   ```

3. **Hoàn thành feature**
   ```bash
   git checkout main
   git pull origin main
   git merge feature-name
   git push origin main
   git branch -d feature-name
   ```

## Các lệnh hữu ích khác

```bash
git diff                     # Xem thay đổi chưa commit
git reset HEAD <file>        # Bỏ file khỏi staging
git checkout -- <file>       # Quay lại file cuối cùng
git stash                     # Lưu tạm thay đổi
git stash pop                 # Lấy lại thay đổi tạm
```

## Giải quyết conflict

Khi có conflict:
1. Mở file có conflict
2. Tìm các đoạn `<<<<<<<`, `=======`, `>>>>>>>`
3. Chọn giữ lại nội dung muốn
4. Xóa các dấu conflict
5. Add và commit lại

## Tips và tricks

- Commit thường xuyên với message rõ ràng
- Sử dụng branch cho mỗi feature
- Pull trước khi push để tránh conflict
- Sử dụng `.gitignore` để bỏ file không cần thiết
