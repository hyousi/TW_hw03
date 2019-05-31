module.exports = function main(seq) {
    console.log("Debug Info");
    const row1 = '._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.'.split('   ');
    const row2 = '|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|'.split('   ');
    const row3 = '|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|'.split('   ');
    return getNumber(seq, row1) + getNumber(seq, row2) + getNumber(seq, row3);
};

function getNumber(seq, row) {
    let ans = [];
    for (let i = 0; i < seq.length; i++) {
        const curr = Number(seq[i]);
        ans.push(row[curr]);
    }
    return ans.join(' ') + '\n';
}

