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
                <table className="overflow-x-auto items-center w-full bg-transparent border-collapse">
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
                                Admitted On
                            </th>
                            <th className={styles.colHead}>
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data?.me?.hospital?.patientauthorizedhospitalSet.map(patient =>
                                <Link href={`/hospital/patients/${patient.patientId.id}`}>
                                    <tr key={patient.patientId.id}>
                                        <th className={styles.rowHead}>
                                            {patient.patientId.name}
                                        </th>
                                        <td className={styles.td}>
                                            {patient.patientId.phone}
                                        </td>
                                        <td className={styles.td}>
                                            {patient?.patientId?.doctorpatientassignedSet.length > 0 ?
                                                patient?.patientId?.doctorpatientassignedSet.at(-1).doctor.name : "-"}
                                        </td>
                                        <td className={styles.td}>
                                            {patient?.patientId.doctornotesSet.length > 0 ?
                                                patient?.patientId?.doctornotesSet.map(diagnosis => diagnosis.diagnosis) : "-"}
                                        </td>
                                        <td className={styles.td}>
                                            {patient?.patientId?.doctorpatientassignedSet.length > 0 ?
                                                patient?.patientId?.doctorpatientassignedSet.at(-1).assignedAt.slice(0, 10) : "-"}
                                        </td>
                                        <td className={styles.td}>
                                            {patient?.patientId?.doctorpatientassignedSet.length > 0 ?
                                                patient?.patientId?.doctorpatientassignedSet.at(-1).status : "-"}
                                        </td>
                                    </tr>
                                </Link>
                            )
                        }
                    </tbody>

                </table>)
            }
        </Layout >
    )
}

export default Dashboard
