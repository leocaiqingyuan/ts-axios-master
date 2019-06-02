interface Config {
    url: String,
    method?: String
}

function fn(config: Config): void {
    let {url} = config;
    console.log(url);
}

fn({url: '123', method: 'get'})
