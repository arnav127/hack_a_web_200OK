import { useState } from 'react';

import {
} from '../../../graphql/generated'

import { uploadFile } from '../../../lib/fileUpload';

const PatientRecords = ({ pid, data }) => {
    const [file, setFile] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();


        let downloadLoc = "";
        if (file == null) return;

        uploadFile(file, file?.name)
            .then(res => {
                downloadLoc = res
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <h2>Patient Records</h2>
            <input type="file" onChange={(e) => { setFile(e.target.files[0]) }} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    )
}

export default PatientRecords;
