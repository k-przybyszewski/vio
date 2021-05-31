export class Kernel {

    constructor(env: string) {}

    isDev(): Boolean  {
        return false;
    }

    bootstrap(): Boolean {
        return false
    }    
}