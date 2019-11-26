usage:

`import MediaQueryList from "@mystify/mediaQueryList";`

```
componentDidMount() {
    this.mql = new MediaQueryList('(max-width: 960px)');
    this.mql.addListener(this.mediaQueryChanged);
}
```
```
mediaQueryChanged = e => {
    if (this.mql.matches) {
      // do something here
    }
    else {
      // do something else here
    }
  };
```
```
componentWillUnmount() {
    if (this.mql) this.mql.removeListener(this.mediaQueryChanged);
}
```
