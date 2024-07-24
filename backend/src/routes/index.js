const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')
const PaymentRouter = require('./PaymentRouter')
const VoucherRouter = require('./VoucherRouter')
const CommentRouter = require('./CommentRouter')
const FavouriteRouter = require('./FavouriteRouter')

const routes = (app) => {
    app.use('/api/user', UserRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/order', OrderRouter)
    app.use('/api/payment', PaymentRouter)
    app.use('/api/voucher', VoucherRouter)
    app.use('/api/comment', CommentRouter)
    app.use('/api/favourite', FavouriteRouter )
}

module.exports = routes