import React from 'react'

function PurchaseHistory() {
    return (
        <div className="modal fade" id="orderHistory" tabindex="-1" role="dialog" aria-labelledby="orderHistoryTitle"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="orderHistoryTitle">Lịch sử mua hàng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body p-4">

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export default PurchaseHistory