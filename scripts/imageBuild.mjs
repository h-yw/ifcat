// docker save -o ifcat.tar moonhou/ifcat:0.0.1-alpha
// docker tag ifcat moonhou/ifcat:0.0.1-alpha
// docker build -t ifcat .
// scp ifcat.tar hz@hlovez.life:/home/hz
import dotenv from 'dotenv'
import process from 'child_process'

const env = dotenv.config({
  path: './.env.production',
})
if (!env.parsed) throw new Error('env load error')

process.execSync('docker save -o ifcat.tar moonhou/ifcat:0.0.1-alpha')
