const { getMemos } = require('../db/memos');
const { verifyToken } = require('../auth');

const routes = async (fastify, options) => {
    fastify.route({
        method: 'GET',
        url: '/api',
        schema: {
            querystring: {
                authToken: {
                    type: 'string'
                }
            },
    
            response: {
                201: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        },
    
        preHandler: async (req, res) => {

        },
    
        handler: async (req, res) => {
            const user = verifyToken(req.query.authToken);

            //if (user) {
                const arr = [];
                const memos = await getMemos(user._id);

                memos.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    arr.push(doc.data());
                });
                
                return arr;
            /*}
            else return {
                statusCode: 401,
                msg: 'Invalid token'
            };*/
        }
    });
}

module.exports = routes;