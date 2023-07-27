const createResponse = (status, message = null, data = null) => {
    return { status, message, data };
};

module.exports = { createResponse };
