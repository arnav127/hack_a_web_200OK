import Link from 'next/link'

import { useAdmittedRecordsQuery } from '../../../graphql/generated'

import Layout from '../../../components/Hospital/Layout'

const Dashboard = () => {
    const { data, loading, error } = useAdmittedRecordsQuery();

    const styles = {
        colHead: "px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",
        rowHead: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700",
        td: "border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
    }

    return (
        <Layout title="Patient Records">
            {(!loading && !error) && (
                <table className="items-center bg-transparent w-full border-collapse overflow-x-auto">
                    <thead>
                        <tr>
                            <th className={styles.colHead}>
                                Name
                            </th>
                            <th className={styles.colHead}>
                                Phone
                            </th>
                            <th className={styles.colHead}>
                                Doctor assigned
                            </th>
                            <th className={styles.colHead}>
                                Diagnosis
                            </th>
                            <th className={styles.colHead}>
                                Discharge
                            </th>
                            <th className={styles.colHead}>
                                Refer
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.me?.hospital?.patientauthorizedhospitalSet.map(patient =>
                                <tr key={patient.patientId.id}>
                                    <th className={styles.rowHead}>
                                        {patient.patientId.name}
                                    </th>
                                    <td className={styles.td}>
                                        {patient.patientId.phone}
                                    </td>
                                    <td className={styles.td}>
                                        {patient.patientId.doctorPatientAssignedSet &&
                                            patient.patientId.doctorPatientAssignedSet.map(doctor => doctor.doctor.name)}
                                    </td>
                                    <td className={styles.td}>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>)
            }
        </Layout>
    )
}

export default Dashboard
