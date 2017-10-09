export async function getCpuLoad(){
    let cpuLoad =  await fetch("/load")
    return cpuLoad.json()
}