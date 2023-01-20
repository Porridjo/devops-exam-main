// TODO: Add here the function to validate

function validateGamerTag(tag) {
    if (tag.length >= 8) {
        return true;
    }
    return false;
}

const isEmpty = (label) => !label || label.length === 0;

module.exports = { isEmpty, validateGamerTag };
