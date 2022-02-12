const TestResults = ({ pid, data }) => {
    return (
        <div>
            <h2>Test Results</h2>
            {data?.patient?.testresultSet.length > 0 &&
                <>
                    {data.patient.testresultSet.map(result => {
                        return (
                            <>
                                <div>{result.testName}</div>
                                <div>{result.testResult}</div>
                                {result.media && <a href={result.media}>Download</a>}
                            </>
                        )
                    })}
                </>
            }
        </div>
    )
}

export default TestResults;
