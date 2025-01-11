import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Questions and goals:
 * 1. have we gotten MORE anime?
 * 2. has viewership gone up over time? (even accounting that older shows have more time to be viewed)
 * 3. is anime getting "better"? what is the general trend for ratings? (even accounting for recency bias
 * and "mainstremification", possibly leading to newer fans rating shows more highly, (maybe frieren?) and
 * popular shows like jjk and other shonen having naturally higher ratings. Or perhaps lower. perhaps
 * popularity invites people who dislike it in other cases when it's more niche and easier to dislike)
 * 4. is anime getting more "serious"? how has the percentage of comedy anime gone up or down? By count?
 * and by viewership i.e. MAL membership counts? membership counts must be taken into context with
 * overall membership counts over time to account for recency "bias", trending both to higher
 * and lower view counts in different scenarios (older shows more time, newer shows more hype, covid lol)
 * 5. how has anime viewership changed before, during, and after covid?
 * 6. how has the harem rom com genre changed? in terms of membership/viewership, percentage of seasons,
 * and ratings! use both the MAL tags and the manami (more liberally used) tags
 * 7. same question for rom com. same question for general romance anime.
 * 8. Is anime more diverse now? How does membership of the top 3 shows on MAL compaere to the average of the following 3 shows?
 *   We have already filtered by membership < 1000, and even not including that it's hard to pick the "bottom of the barrel" so to speak,
 *   and perhaps that true bottom does not REALLY matter or is not really indicative of much, because of how MAL is at any rate that bottom
 *   that "actually matters" is difficult to identify
 * We are using MAL as the source of truth. That... is an extremely debatable source.
 * I don't even have an inkling of how that truly affects the data. 
 * Does this causes cult classics like Madoka to be more highly rated than in the grand scheme, because
 * only more committed weebs care to use MAL?
 * Or does it cause more popular anime to be rated more highly, because every person's vote on MAL is equal?
 * Does it cause haters to conglomerate and view bomb more controversial shows, or anything not titled Fullmetal Alchemist?
 * Is this the place where, in reality, newer anime fans gather, while the older ones have learned to stop caring about
 * the opinions of the masses?
 * Probably, I believe, it is all these things. And more. And these things contradict each other in a way that is difficult to quantify.
 */

/**
 * to answer these questions, first we will need to complete filtering of seasonal anime (to remove stuff like
 * hentai, non-japanese animation, other outliers)
 * This will be done by filtering by tag, and membership on MAL < 1000. We have already filtered by episode count >= 6
 * so movies, music videos, special episodes etc. should already be filtered out.
 * 
 * After that, we will need to aggregate:
 * 1. membership count on MAL
 * 2. rating on MAL
 * 3. season and year
 * 4. Genres and themes on mal. Comedy and romance are genres, harem, is a theme (apparently, lol). 
 * Mal does not consider Alya a harem, and Blue Box is a "love polygon". Fair enough.
 * 5. tags from the manami database
 * 
 * We will need to generate graphs for the following scenarios:
 * 1. number of anime per season, 4x/year
 * 2. membership over time on MAL.
 *   a. total membership per season
 *   b. average membership per anime per season
 *   c. membership of the number one anime per season
 *   d. average membership of the top 3 anime per season
 *     i) reach goal, that "top" number becomes configurable. e.g. top 5, top 7, top 10 etc.
 *   e. from this we will try to determine and quantify how anime's popularity has changed over the years. Again, relying on MAL
 *      as the source of truth which ofc is... at least slightly suspect.
 *   5. (yes the 5 is intentional) We will highlight the periods of before during and after covid. As well as perhaps genshin impact and... vtubers?
 * 3. Is anime getting better?
 *   a. The rating of the number 1 show every season. Individually, and also, adjusted by membership counts.
 *   b. The average rating of the top 10 shows every season. Similarly adjusted both ways.
 *   c. Every show in a season. Adjusted both ways.
 * 4. Is anime more "serious?"
 *   a. number of "comedy" anime per season, graphed alongside the number of anime per season. using both mal, and manami database.
 *      there will be 3 lines here.
 *   b. We will change the above graph to a percentage, to account for changing membership counts per season.
 *   c. Lastly, we will weight this by show membership. To show not just the anime being made, but the ones being watched.
 *      We could do a rating cutoff, because just because a show calls itself comedy doesn't mean it's actually good or good at being funny.
 *      But anime, and at times comedy especially, is a precious subjective thing. Membership, should hopefully already account for this enough.
 *   d. last but not least, we will repeat the "ratings" graph from point 3 above, but restricted to comedy anime.
 * 6. repeat for harem shows
 * 7. repeat for rom com and romance overall
 * 8. We must come up with a way to quantify "diversity", or at least visualize it. One idea - of the top 9 shows, per season,
 * what percentage of the members are in the top 3, and what percentage are in the next 3, and the next 3. This can be visualized
 * as a bar graph with each bar broken up into 3 colors. In essence, it is 2 numbers. Percent of the top 3, and percent of the middle 3.
 * Choosing to end at 9, of course, is somewhat arbitrary, but I can't think of a way to help that. (it, at least currently,
 *  can't be helped, at least not by me, in other words)
 */