const MedicineRecords = ({ pid, data }) => {
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
        </div>
    )
}

export default MedicineRecords
