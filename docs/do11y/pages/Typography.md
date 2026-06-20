<script setup>
  import HomoglyphGrid from '../typography/HomoglyphGrid.vue';
  import TypeScale from '../typography/TypeScale.vue';
</script>

# Typography

<div class="description">
A simple type system.
</div>

<HomoglyphGrid />

## Scale

The scale includes 9 steps: 6 heading sizes and 3 body sizes. The smaller heading sizes, `l` and `xl`, can be used for body text too.

<TypeScale />

### Variables

Every step in the scale has accompanying CSS variables for the font size and the line height. For example `xxxl` will have the variables `--font-size-xxxl` and `--line-height-xxxl`.

### Options

The CSS variables `--font-size-scale` and `--line-height-scale` are available to modify the scale for the font sizes or line heights, both default to `1`.

Depending on the x-height of the font you choose, you _most likely_ will want to modify the scale for line heights. If you want the smallest font size to start at `1rem` - you can set the scale for font size to `1.0256410256`.

## Resources

- [The ideal line length & line height in web design](https://pimpmytype.com/line-length-line-height/)
- [What is queer typograpghy?](https://soulellis.com/writing/tdc2021/)
- [Women in Type](https://www.women-in-type.com/)

### Fonts

- [Badass Libre Fonts by Womxn](https://www.design-research.be/by-womxn/) - a collection of typefaces created by womxn.
- [Protest Fonts](https://genderfailpress.info/PROTEST-FONTS) - “fonts based on protest signs from queer and trans projects, the protests for black lives since the Stonewall Riots of 1969 to the present”.
- [Font Friday](https://pimpmytype.com/fontfriday/) - every friday Oliver Schöndorfer reviews a free font.
- [A Queer Year of Love Letters](https://www.librarystack.org/a-queer-year-of-love-letters/) - “a series of fonts that remembers the lives and work of countercultural queers of the past several decades”.
- [Vocal Type](https://www.vocaltype.co/typefaces) (paid fonts) - “a font foundry that would introduce a piece of minority culture into the root of any good graphic design work — typography”.
- [The Bye Bye Binary typolibrary](https://typotheque.genderfluid.space/fr) - a collection of “inclusive, non-binary, post-binary fonts under construction”.
- [Fontshare™](https://www.fontshare.com/) - “a growing collection of professional grade fonts that are 100% free for personal and commercial use”.

### Extras

- [The Typeface: Queery](https://queerfonts.design/)
- [Bumpy Typeface](https://beatricecaciotti.com/project/bumpy-typeface/)
