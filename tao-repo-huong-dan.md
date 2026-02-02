# Hướng dẫn tạo Repository GitHub

## Cách 1: Tạo trên GitHub rồi clone về (Khuyên dùng)

1. **Tạo repository trên GitHub**:
   - Truy cập https://github.com
   - Đăng nhập tài khoản
   - Click "New" (góc phải)
   - Đặt tên repo (ví dụ: "cv-personal")
   - Chọn Public/Private
   - **KHÔNG** tick "Add a README file"
   - Click "Create repository"

2. **Clone repo về máy**:
   ```bash
   git clone https://github.com/username/cv-personal.git
   cd cv-personal
   ```

3. **Copy file CV vào**:
   ```bash
   # Copy từ thư mục hiện tại
   copy ..\cv.html .
   copy ..\style.css .
   ```

4. **Push lên GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: Add personal CV"
   git push origin main
   ```

## Cách 2: Tạo repo local rồi push lên GitHub

1. **Khởi tạo git**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Add personal CV"
   ```

2. **Tạo repo trên GitHub**:
   - Truy cập GitHub → New repository
   - Đặt tên repo
   - **KHÔNG** tick "Add README file"
   - Click "Create repository"

3. **Push lên GitHub**:
   ```bash
   git remote add origin https://github.com/username/cv-personal.git
   git branch -M main
   git push -u origin main
   ```

## Lệnh useful khác

- Xem status: `git status`
- Xem commits: `git log --oneline`
- Pull thay đổi: `git pull origin main`
- Tạo branch mới: `git checkout -b feature-name`
- Merge branch: `git merge feature-name`

## Tips cho CV

- Thêm file `.gitignore` để bỏ file không cần thiết
- Sử dụng GitHub Pages để host CV online
- Thêm file README.md mô tả dự án
