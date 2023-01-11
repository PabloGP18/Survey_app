import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import AuthProvider from './Auth/AuthProvider'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.scss'
import LoginPage from './pages/LoginPage'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/login" element={<LoginPage />} />
				<Route path="/survey" element={<SurveyPage />} />
			</Routes>
			<Footer />
		</Router>
	)
}

export default App
