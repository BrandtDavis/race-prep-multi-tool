function ActivityListPage() {

    return (
        <div>
            <div className="bg-slate-500 mt-24 p-6">
                <table className="w-full bg-slate-500 text-sm shadow-md">
                    
                    <thead className="text-left bg-slate-200 border border-slate-400">
                        <tr className="p-4">
                            <th className="p-4">Date</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">Distance</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Notes</th>
                            <th className="p-4">Completed</th>
                        </tr>
                    </thead>

                    <tbody className="bg-slate-400">
                        <tr>
                            <td className="p-2">2020-10-20</td>
                            <td className="p-2">Easy Run</td>
                            <td className="p-2">20km</td>
                            <td className="p-2">Road Run</td>
                            <td className="p-2">Wind affected my pace</td>
                            <td className="p-2">Yes</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default ActivityListPage;