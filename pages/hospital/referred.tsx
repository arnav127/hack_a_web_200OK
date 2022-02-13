import Layout from '../../components/Hospital/Layout'

import {
    useReferredInPatientsQuery,
    useReferredOutPatientsQuery
} from '../../graphql/generated'

const ReferredPatients = () => {
    const { data: incoming, loading: inLoading, error: inError } = useReferredInPatientsQuery()
    const { data: outgoing, loading: outLoading, error: outError } = useReferredOutPatientsQuery()
    const styles = {
        colHead:
            'px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left',
        rowHead:
            'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700',
        td: 'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4',
    }

    return (
        <Layout title="Referred Patients">
            <h2 className="my-2 uppercase text-sm font-bold">Incoming</h2>
            <table className="overflow-x-auto items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className={styles.colHead}>Name</th>
                        <th className={styles.colHead}>Referred from</th>
                        <th className={styles.colHead}>Reason</th>
                    </tr>
                </thead>

                {!inLoading && !inError ? (
                    <tbody>
                        {incoming?.referredInPatients?.length > 0 &&
                            incoming?.referredInPatients.map((patient) => {
                                return (
                                    <tr key={patient?.id}>
                                        <th className={styles.rowHead}>{patient?.patient?.name}</th>
                                        <td className={styles.rowHead}>{patient?.hospitalReferredBy?.name}</td>
                                        <td className={styles.rowHead}>{patient?.reasonReferred}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                ) : (
                    <tr><td>Loading...</td></tr>
                )}
            </table>
            <h2 className="mt-8 my-2 uppercase text-sm font-bold">Outgoing</h2>
            <table className="overflow-x-auto items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                        <th className={styles.colHead}>Name</th>
                        <th className={styles.colHead}>Referred To</th>
                        <th className={styles.colHead}>Reason</th>
                    </tr>
                </thead>

                {!outLoading && !outError ? (
                    <tbody>
                        {outgoing?.referredOutPatients?.length > 0 &&
                            outgoing?.referredOutPatients.map((patient) => {
                                return (
                                    <tr key={patient?.id}>
                                        <th className={styles.rowHead}>{patient?.patient?.name}</th>
                                        <td className={styles.rowHead}>{patient?.hospitalReferred?.name}</td>
                                        <td className={styles.rowHead}>{patient?.reasonReferred}</td>
                                    </tr>
                                )
                            })}
                    </tbody>
                ) : (
                    <tr><td>Loading...</td></tr>
                )}
            </table>
        </Layout >
    )
}

export default ReferredPatients
