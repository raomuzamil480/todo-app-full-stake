# This is Tofo site by Use Django and In Roman Urdu use
# Todo App — React + Django (JWT Auth)

Full-stack Todo application: Django REST Framework backend + React frontend.
Features: Signup, Login (JWT), Todo CRUD (Create, Read, Update, Delete, Mark Complete).

---

## 📁 Folder Structure

```
todo-app/
├── backend/        → Django REST API
└── frontend/        → React App
```

---

## 🔧 Backend Setup (Django)

1. Terminal me backend folder me jaayein:
```bash
cd backend
```

2. Virtual environment banayein (recommended):
```bash
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac/Linux
```

3. Requirements install karein:
```bash
pip install -r requirements.txt
```

4. Database migrate karein:
```bash
python manage.py makemigrations
python manage.py migrate
```

5. (Optional) Admin user banayein:
```bash
python manage.py createsuperuser
```

6. Server run karein:
```bash
python manage.py runserver
```

Backend ab `http://127.0.0.1:8000` pe chal raha hoga.

---

## ⚛️ Frontend Setup (React)

1. Naye terminal me frontend folder me jaayein:
```bash
cd frontend
```

2. Packages install karein:
```bash
npm install
```

3. React app run karein:
```bash
npm start
```

Frontend `http://localhost:3000` pe khulega.

---

## ✅ Use kaise karein

1. Pehle dono servers chala lein (backend aur frontend, dono terminals me alag-alag)
2. Browser me `http://localhost:3000` open karein
3. Signup karein → naya account banega
4. Login karein → todos add/edit/delete/complete kar sakte hain

---

## 📌 API Endpoints (reference)

| Method | Endpoint                  | Description          |
|--------|----------------------------|-----------------------|
| POST   | /api/register/             | Naya user signup      |
| POST   | /api/login/                | Login (JWT token)     |
| POST   | /api/login/refresh/        | Token refresh         |
| GET    | /api/todos/                | Sab todos list        |
| POST   | /api/todos/                | Naya todo banayein    |
| PUT    | /api/todos/{id}/           | Todo update karein    |
| DELETE | /api/todos/{id}/           | Todo delete karein    |

---

## 🛠️ Tech Stack
- **Backend**: Django, Django REST Framework, SimpleJWT, django-cors-headers
- **Frontend**: React, React Router, Axios

---

## Common Issues
- **CORS error**: Backend `settings.py` me `CORS_ALLOWED_ORIGINS` check karein — frontend ka URL match hona chahiye.
- **Module not found**: `pip install -r requirements.txt` dobara run karein.
- **Port already in use**: dusra terminal/process band karein ya port change karein.
