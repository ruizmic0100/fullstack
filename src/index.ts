import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";


const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'ghostrunner',
        user: 'ghostrunner',
        password: 'GR-073B',
        type: 'postgresql',
        debug: !__prod__,
    });



};



console.log("Hello heorld");