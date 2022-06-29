# 🧛 castlenamia

<a href="https://mrrawbin.github.io/castlenamia/">
<img src="banner.png" alt="Castlevania Name Generator">
See it in action 🤯
</a>

This is a silly Castlevania game name generator based on the fact that
a lot of Castlevania games have names that use the formula `x of y` (`Symphony of the Night`, `Rondo of Blood` etc.)

The idea to create this was suggested by the (Swedish) gaming podcast [Sista Bossen](https://sistabossen.com/).

Some example names generated by `castlenamia`:

* `Melody of Despair`
* `Encore of Virtue`
* `Overture of Dissonance`
* `Symphony of the Condemned`
* `Chorus of Agony`
* `Crescent of Ruin`
* `Mirror of the Night`

Since this project is dumb and not very useful at all, it is haphazardly written using
old school ES5 and plain ol' CSS.

If I feel like wasting more time in the future, I just might create an `npm` package containing the actual
logic of generating the name, neatly bundled in a lib. Because *of course* you want to be able to use this
functionality in your own project.

For now, it's all just mashed into a plain `.js` file along with the DOM manipulation stuff.

# 🫶 Contributions
Please feel free to add more ideas for prefixes/suffixes in order to generate more dumb combinations
of names.

All prefixes and suffixes are defined in [castlenamia.js](castlenamia.js):

```javascript
var prefix = [
    "Rondo",
    "Symphony",
    // etc.
]

var suffix = [
    "Blood",
    "the Night",
    // etc.
}
```

Note that the `of` part is always added between the prefix and suffix automagically.

Create a pull request, or create an issue with your suggestions.

# 😡 Disclaimer

This project is in no way affiliated with, nor endorsed by, Konami.