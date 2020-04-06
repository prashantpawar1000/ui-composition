'use strict';
const fs = require('fs-extra');

(async () => {
    const target = `${__dirname}/../`;
    const sourceDirDist = `${__dirname}/dist`;
    const source = `${sourceDirDist}/ui-composition`;
    await fs.ensureDirSync(target);
    await fs.copy(source, target, { overwrite: true })
    console.log('Webcomponent src moved')
})()