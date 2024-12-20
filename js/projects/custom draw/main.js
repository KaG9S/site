const canvas = document.getElementById('myCanvas')
const cxt = canvas.getContext("2d");
const width = canvas.width
const height = canvas.height
const commandEl = document.getElementById('command')
const helpTemplate = 'help, draw(<figure> <pos(x1 y1)> <args(radius; width height; x2 y2( x3 y3;);)> <color>), clear(<pos(x1 y1)> <args(width, height)>)'

function myFunction(){
    let command = commandEl.value
    let commandArrgs = command.split(' ')
    let commandName = commandArrgs[0]
    let args = commandArrgs.slice(1)
    let figure = args[0]
    let x1 = parseInt(args[1])
    let y1 = parseInt(args[2])
    let color = args[args.length - 1]
    switch (commandName){
        case 'help':
            alert(helpTemplate)
            break
        case 'draw':
            cxt.fillStyle = color
            try{
                switch (figure){
                    case 'circle':
                        cxt.beginPath();
                        cxt.arc(x1, y1, parseInt(args[3]), 0, 2 * Math.PI)
                        cxt.fill();
                        break
                    case 'rect':
                        cxt.fillRect(x1, y1, parseInt(args[3]), parseInt(args[4]))
                        break
                    case 'triangle':
                        cxt.beginPath();
                        cxt.moveTo(x1, y1)
                        cxt.lineTo(parseInt(args[3]), parseInt(args[4]))
                        cxt.lineTo(parseInt(args[5]), parseInt(args[6]))
                        cxt.closePath();
                        cxt.fill()
                        break
                    case 'line':
                        cxt.beginPath();
                        cxt.moveTo(x1, y1)
                        cxt.lineTo(parseInt(args[3]), parseInt(args[4]))
                        cxt.stroke()
                        break
                    default:
                        alert('Figure not found!')
                }
            }catch{
                alert('Arguments not found!')
            }
            break
        case 'clear':
            cxt.clearRect(x1, y1, parseInt(args[3]), parseInt(args[4]))
            break
        default:
            alert('Command not found!')
    }
}

function custom(shape) {
    const x1 = parseInt(document.getElementById('x1').value);
    const y1 = parseInt(document.getElementById('y1').value);
    const color = document.getElementById('color').value;
    cxt.fillStyle = color;

    switch (shape) {
        case 'rect':
            const width = parseInt(document.getElementById('width').value);
            const height = parseInt(document.getElementById('height').value);
            cxt.fillRect(x1, y1, width, height);
            break;
        case 'tri':
            const x2 = parseInt(document.getElementById('x2').value);
            const y2 = parseInt(document.getElementById('y2').value);
            const x3 = parseInt(document.getElementById('x3').value);
            const y3 = parseInt(document.getElementById('y3').value);
            cxt.beginPath();
            cxt.moveTo(x1, y1);
            cxt.lineTo(x2, y2);
            cxt.lineTo(x3, y3);
            cxt.closePath();
            cxt.fill();
            break;
        case 'arc':
            const radius = parseInt(document.getElementById('radius').value);
            cxt.beginPath();
            cxt.arc(x1, y1, radius, 0, 2 * Math.PI);
            cxt.fill();
            break;
        case 'clear':
            const clearX2 = parseInt(document.getElementById('clearx2').value);
            const clearY2 = parseInt(document.getElementById('cleary2').value);
            cxt.clearRect(x1, y1, clearX2, clearY2);
            break;
        default:
            alert('Shape not found!');
    }
}
