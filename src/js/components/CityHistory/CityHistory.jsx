import React from 'react';







class CityHistory extends React.Component {
    render() {
        const {searchHistory} = this.props;
  

        return (
            <div className="col">
                <div className="card  border-info">
                    <div className="card-header text-white bg-info">
                        Search History
  </div>
                    <div className="card-body pb-2 ">

                        <table className="table table-striped">

                            <tbody>

                                {!!searchHistory && searchHistory.map(search => {
                                    return(<tr>
                                        <td>{search.name}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td >{search.time}</td>
                                    </tr>)
                                })}

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        );
    }
}

export default CityHistory;
