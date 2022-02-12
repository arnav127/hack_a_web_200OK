import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '../../components/Hospital/Layout'
import { useAuth } from '../../lib/auth'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const loadUser = () => {
      const isAuthenticated = localStorage.getItem('user')
      if (!isAuthenticated) router.replace('/hospital/login')
    }
    loadUser()
    setIsLoading(false)
  }, [])

  return isLoading ? (
    'Loading...'
  ) : (
    <Layout title="Dashboard">Doctor ka dashboard</Layout>
  )
}

export default Dashboard
