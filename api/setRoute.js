const { FieldValue } = require('firebase-admin/firestore');

const { createMemo } = require('../db/memos');

const routes = async (fastify, options) => {
    fastify.route({
        method: 'POST',
        url: '/api',
        schema: {
            body: {
                $ref: "memoSchema"
            },
    
            response: {
                201: {
                    type: 'object',
                    properties: {
                        success: { type: 'boolean' }
                    }
                }
            }
        },
    
        preHandler: async (req, res) => {

        },
    
        handler: async (req, res) => {
            const memo = req.body;
            memo.timestamp = FieldValue.serverTimestamp();

            const m = await createMemo("aqwerf", memo);

            if (m) {
                return {
                    statusCode: 201,
                    msg: {
                        success: true
                    }
                };
            }
            else {
                return {
                    statusCode: 400,
                    msg: {
                        success: false
                    }
                }
            }
        }
    });
}

module.exports = routes;