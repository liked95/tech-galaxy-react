import { useGetUsersQuery } from 'features/Users/users.service'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { login } from 'features/Users/user.slice'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PAGE_TRANSITION_DURATION } from 'utils/index'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector(state => state.userList.auth)



    useGetUsersQuery()
    const users = useSelector(state => state.userList.users)



    const [userName, setUserName] = useState('')
    const [userNameAlert, setUserNameAlert] = useState('')

    const [password, setPassword] = useState('')
    const [passwordAlert, setPasswordAlert] = useState('')



    const handleLoginSubmit = (e) => {
        e.preventDefault()

        !userName.trim() ? setUserNameAlert("Tên đăng nhập không được để trống") : setUserNameAlert('')
        !password.trim() ? setPasswordAlert("Mật khẩu không được để trống") : setPasswordAlert('')
        if (!userName.trim() || !password.trim()) return

        let user

        if (users.length == 0) {
            setUserNameAlert('Tên đăng nhập / mật khẩu không đúng')
            setPasswordAlert('Tên đăng nhập / mật khẩu không đúng')
            return;
        }

        if (users.length > 0 && userName && password) {
            user = users.find(u => u.name == userName && u.password == password)
        }

        if (!user) {
            setUserNameAlert('Tên đăng nhập / mật khẩu không đúng')
            setPasswordAlert('Tên đăng nhập / mật khẩu không đúng')
        } else {
            dispatch(login({ username: user.name, id: user.id }))
            alert('Đăng nhập thành công')
            navigate("/")
            notify()
        }
    }

    useEffect(() => {
        setUserNameAlert('')
    }, [userName]);

    useEffect(() => {
        setPasswordAlert('')
    }, [password]);


    const notify = () => {
        toast.success("Success Notification !", {
            position: toast.POSITION.BOTTOM_RIGHT
        });

    };

    if (auth) {
        navigate("/")
        return
    }

    return (
        <motion.div
            className="login"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: PAGE_TRANSITION_DURATION } }}>
            <div className="container">
                <h4>Đăng nhập</h4>
                <div className="login-container">
                    <form action="">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="text" id="username" value={userName} onChange={e => setUserName(e.target.value)} />
                        <p className="username-noti">{userNameAlert}</p>
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <p className="password-noti">{passwordAlert}</p>
                        <button id="start-login-btn" onClick={handleLoginSubmit}>Đăng nhập</button>
                        <p className="register-prompt">
                            Chưa có tài khoản?
                            <Link to="/register">Đăng kí</Link>
                        </p>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Login