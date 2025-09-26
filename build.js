const commands = {
    package: () => {
        console.log(process.argv[3])
    }
}

const script = process.argv[2];
commands[script]();