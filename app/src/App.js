import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'
import ThankYouPage from './pages/ThankYouPage'
import './App.scss'
import { UserContextProvider } from './context/UserContext'

function App() {
	return (
		<UserContextProvider>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/login" element={<LoginPage />} />
					<Route path="/survey" element={<SurveyPage />} />
					<Route path="/error" element={<ErrorPage />} />
					<Route path="/thank-you" element={<ThankYouPage />} />
				</Routes>
				<Footer />
			</Router>
		</UserContextProvider>
	)
}

export default App
