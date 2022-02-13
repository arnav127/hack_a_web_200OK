import { useState } from 'react'
import Link from 'next/link'

import Layout from '../../components/Doctor/Layout'

import { useAuth } from '../../lib/auth'

import { useAssignedPatientsQuery } from '../../graphql/generated'

const Dashboard = () => {
  const { user } = useAuth()
  const { data, loading, error } = useAssignedPatientsQuery()
  const styles = {
    colHead:
      'px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left',
    rowHead:
      'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700',
    td: 'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4',
  }

  return (
    <Layout title="Dashboard">
      <p>Hello, Dr. {user?.doctor?.name}</p>
      <h2>View assigned patients</h2>
      <table className="w-full border-collapse items-center overflow-x-auto bg-transparent">
        <thead>
          <tr>
            <th className={styles.colHead}>Name</th>
            <th className={styles.colHead}>Phone</th>
            <th className={styles.colHead}>Diagnosis</th>
            <th className={styles.colHead}>Admitted On</th>
            <th className={styles.colHead}>Status</th>
          </tr>
        </thead>

        <tbody>
          {data?.doctorPatientAssigned.map((patient) => {
            return (
              <Link href={`/doctor/patients/${patient.patient.id}`}>
                <tr key={patient.patient.id}>
                  <th className={styles.rowHead}>{patient.patient.name}</th>
                  <td className={styles.td}>{patient.patient.phone}</td>
                  <td className={styles.td}>
                    {patient?.patient.doctornotesSet.length > 0
                      ? patient?.patient?.doctornotesSet.map(
                          (diagnosis) => diagnosis.diagnosis
                        )
                      : '-'}
                  </td>
                  <td className={styles.td}>
                    {patient?.patient?.doctorpatientassignedSet.length > 0
                      ? patient?.patient?.doctorpatientassignedSet
                          .at(-1)
                          .assignedAt.slice(0, 10)
                      : '-'}
                  </td>
                  <td className={styles.td}>
                    {patient?.patient?.doctorpatientassignedSet.length > 0
                      ? patient?.patient?.doctorpatientassignedSet.at(-1).status
                      : '-'}
                  </td>
                </tr>
              </Link>
            )
          })}
        </tbody>
      </table>
    </Layout>
  )
}

export default Dashboard
