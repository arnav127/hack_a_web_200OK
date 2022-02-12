import { useAuth } from '../../../lib/auth'

const MedicineRecords = ({ pid, data }) => {
    const { user } = useAuth()
    return (
        <div>
            <h2>Medicine Records</h2>
            {data?.patient?.medicinerecordSet.length > 0 &&
                <>
                    {data.patient.medicinerecordSet.map(record => {
                        return (
                            <div key={record.id}>
                                {record.prescriptions.map(p => {
                                    return (
                                        <div>
                                            {p.medicine}
                                            {p.doses}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </>
            }
            {user?.isDoctor && "This is a doctor"}
        </div>
    )
}

export default MedicineRecords
