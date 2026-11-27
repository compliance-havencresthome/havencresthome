HCH_MODULES.push({
id:'m07', order:7, roles:['dsp','admin'], minutes:25, renewDays:365, pass:80,
title:'Electronic Visit Verification, Scheduling and Reliability',
refs:['21st Century Cures Act §12006 (EVV)','Wisconsin DHS EVV program (Sandata)','DHS 105.17(1g)(cm)','DHS P-01602 §V.8; Inclusa SHC Scope §3.5, 7.2'],
sections:[
{title:'What EVV is and why it exists',slides:[
{h:'EVV in one minute',body:`<p>Federal law (the 21st Century Cures Act) requires every Medicaid-funded personal care and home care visit to be verified electronically. Wisconsin's system is run by DHS through <b>Sandata</b>. Every visit must capture six things:</p>
<ol><li>Type of service</li><li>The member receiving it</li><li>The date</li><li>The <b>location</b> (GPS at clock-in and clock-out)</li><li>The <b>time</b> the visit began and ended</li><li>The worker providing it</li></ol>
<p>If the six things are not captured, Haven Crest cannot bill the visit. If they are falsified, it is fraud.</p>`,ref:'Cures Act §12006; WI DHS EVV'},
{h:'Three ways to clock in',body:`<table><tr><th>Method</th><th>How</th><th>When to use</th></tr>
<tr><td><b>Mobile app</b> (Sandata Mobile Connect)</td><td>Open the app at the member's door, select the member and service, tap Start. Tap End before leaving. Uses your phone's GPS.</td><td>Default for every visit</td></tr>
<tr><td><b>Telephone (TVV)</b></td><td>Call the toll-free number from the <i>member's own landline</i>, enter your ID, follow prompts at start and end.</td><td>Phone dead, no signal, app down</td></tr>
<tr><td><b>Fixed device (FVV)</b></td><td>A small device in the member's home shows a code at start and end; you record the codes and enter them later.</td><td>Homes with no phone and no signal — issued by the office</td></tr></table>
<p>The office trains you on the app and gives you your login. Test it with the office before your first solo visit.</p>`},
{h:'Clocking rules — no exceptions',body:`<div class="do"><ul><li>Clock in <b>inside the member's home</b> (or at the door), at the moment you begin.</li><li>Clock out <b>before you leave</b>, after your note is written.</li><li>One visit = one clock-in and one clock-out. Two members back-to-back = two separate visits.</li><li>Community outings: clock in at the home before leaving, out at the home when you return (the plan tells you if the outing is authorized).</li></ul></div>
<div class="dont"><ul><li>Never clock in from your car, the parking lot, your house or on the way.</li><li>Never clock out from the next member's home.</li><li>Never let anyone else clock in under your login, and never clock in for anyone else.</li><li>Never leave the visit "running" while you run personal errands.</li></ul></div>`},
{h:'When something goes wrong',body:`<ul><li><b>Forgot to clock in:</b> clock in the moment you notice, then call the office with the real start time. The office enters a correction with a reason code. Don't try to "make it up" by clocking out late.</li><li><b>App crashes / no signal:</b> use TVV from the member's landline. If there is no landline, note the exact times on paper, do the visit, and call the office right after.</li><li><b>Visit shorter or longer than scheduled:</b> clock the real times. The office reconciles to the authorization. Never pad.</li><li><b>Member asks you to stay longer:</b> call the office before extending; unauthorized time is unpaid and signals a plan change is needed.</li></ul>
<p>EVV exceptions are normal in small numbers. A pattern of exceptions is a performance problem.</p>`}],
check:[{q:'You arrive and realize your phone is dead. You…',options:['Skip EVV for this visit','Use the member\'s landline to clock in by phone (TVV); if none, note exact times and call the office right after','Clock in from home later','Ask the member to sign a paper instead'],a:1,why:'TVV is the backup; paper times plus an immediate office call is the last resort.'},
{q:'Clocking in from your car in the member\'s driveway is…',options:['Fine if you\'re about to walk in','Not allowed — clock in inside the home when you begin','Fine in bad weather','Fine if the GPS is close enough'],a:1,why:'The location and time must reflect the actual start of care in the home.'}]},

{title:'Scheduling and reliability',slides:[
{h:'Reliability is the product',body:`<p>Members choose Haven Crest over the agency down the road for one reason: <b>we show up</b>. Every late or missed visit is a member who couldn't get out of bed, a daughter who had to leave work, a care manager who starts looking for another provider.</p>
<p>Our standard: <b>on time means within 10 minutes of the scheduled start.</b> Anything later is a late visit and is tracked.</p>`},
{h:'Your schedule',body:`<ul><li>You get your weekly schedule in advance. Check it <b>every evening</b> for the next day — changes happen.</li><li>Accept or decline new shifts within the time the office asks; silence is not an acceptance.</li><li>Know your members' addresses, access instructions (lockbox, knock, side door) and parking before the first visit.</li><li>Build travel time in. Winter in northern Wisconsin adds 15 minutes to everything.</li><li>Never swap visits with another DSP on your own. The office reassigns.</li></ul>`},
{h:'Calling off',body:`<table><tr><th>Situation</th><th>Minimum notice</th></tr>
<tr><td>Planned time off</td><td>2 weeks, through the office</td></tr>
<tr><td>Illness, next-day visits</td><td>The night before, by 8 pm</td></tr>
<tr><td>Same-day emergency</td><td>As soon as you know; at least 2 hours before the visit</td></tr>
<tr><td>Running late</td><td>Call the office <i>and</i> the member as soon as you know you'll be more than 10 minutes late</td></tr></table>
<ul><li>Call-offs are <b>by phone to the office</b>, not by text to the member.</li><li>A no-call/no-show is the most serious attendance violation we have.</li><li>Two call-offs in a pay period, or a pattern, triggers a conversation with your supervisor.</li></ul>`},
{h:'When the member isn\'t there',body:`<ol><li>Knock, ring, call the member's phone. Wait <b>15 minutes</b>.</li><li>Check the access instructions — are you at the right door?</li><li>Call the office from the doorstep. Do not leave without calling.</li><li>If the office cannot reach the member or the emergency contact and there is reason to worry (member lives alone, never misses, car is there), the office may ask you to request a welfare check from police.</li><li>Document the no-show. The office reports it to the care manager within 24 hours.</li></ol>
<p>Never enter a home without permission because "they're probably in the back."</p>`,ref:'Inclusa SHC Scope §7.2'}],
check:[{q:'On time at Haven Crest means…',options:['Within 10 minutes of the scheduled start','Within 30 minutes','Any time that day','Within an hour'],a:0,why:'Late visits are tracked from 10 minutes.'},
{q:'The member doesn\'t answer the door. After 15 minutes of knocking and calling, you…',options:['Leave and try tomorrow','Call the office from the doorstep before leaving','Let yourself in to check','Call the member\'s neighbor'],a:1,why:'Never leave a no-show without calling the office; never enter without permission.'}]},

{title:'Authorized, scheduled, delivered, billed',slides:[
{h:'The chain that pays everyone',body:`<p>Haven Crest's most important operating number is the gap between what the MCO <b>authorized</b>, what we <b>scheduled</b>, what we <b>delivered</b>, what we <b>billed</b>, and what we <b>collected</b>.</p>
<ul><li>Authorized but not scheduled → the member isn't getting care they're entitled to.</li><li>Scheduled but not delivered → missed visits, unhappy member, lost revenue.</li><li>Delivered but not billable → EVV exception, missing note, wrong service code.</li></ul>
<p>Every DSP touches the middle of that chain. Your EVV and your note are what turn a visit into a paid visit.</p>`},
{h:'Hours are per authorization, not per wish',body:`<ul><li>The authorization sets hours per week (or units per month). The schedule is built to use them — not exceed them.</li><li>If a member regularly needs more, <b>report it</b>; the care manager can increase the authorization. Unauthorized hours are unpaid and look like fraud.</li><li>If a member regularly uses less (cancels, refuses), report that too; the care team needs to know.</li><li>Private-pay members have a written schedule and minimums (4-hour visit minimum); same discipline.</li></ul>`},
{h:'Your reliability scorecard',body:`<p>Each month your supervisor reviews, for every DSP:</p>
<ul><li>On-time rate (goal: 95%+)</li><li>Missed visits and call-offs (goal: zero no-call/no-shows)</li><li>EVV exceptions (goal: under 5% of visits)</li><li>Notes completed before clock-out (goal: 100%)</li><li>Member and family feedback</li></ul>
<p>These numbers drive the career ladder. DSP II, Lead and Senior DSP are earned with reliability first, skills second.</p>`}],
check:[{q:'A member regularly needs 30 minutes more than scheduled. You should…',options:['Stay and clock the extra time','Report it so the care manager can review the authorization','Skip tasks to finish on time','Come early without telling anyone'],a:1,why:'Hours follow the authorization; needs beyond it are reported so the plan can change.'}]}],
quiz:[
{q:'EVV must capture six things: service, member, date, worker, and…',options:['Location and time of start and end','Mileage and weather','The member\'s diagnosis','The DSP\'s mood'],a:0},
{q:'Wisconsin\'s EVV system is run through…',options:['Sandata','Facebook','The county','Each MCO separately'],a:0},
{q:'Where do you clock in?',options:['Inside the member\'s home when care begins','In your car','At your home','Anywhere within a mile'],a:0},
{q:'Your phone has no signal and the member has a landline. You…',options:['Use telephone (TVV) clock-in from the member\'s landline','Skip EVV','Clock in from home later','Text the office your times'],a:0},
{q:'You forgot to clock in and notice 20 minutes in. You…',options:['Clock in now and call the office with the real start time','Clock out 20 minutes late to balance it','Say nothing','Ask the member to vouch'],a:0},
{q:'Letting a co-worker use your EVV login is…',options:['Fraud and grounds for termination','Fine in emergencies','Fine for the same member','Allowed with office permission'],a:0},
{q:'Minimum notice for a same-day emergency call-off is…',options:['At least 2 hours before the visit','At the start time','The next day','None if you text the member'],a:0},
{q:'A no-call/no-show is…',options:['The most serious attendance violation','A minor issue','Acceptable once a month','Only an issue for private pay'],a:0},
{q:'The member doesn\'t answer after 15 minutes. Before leaving you must…',options:['Call the office from the doorstep','Enter the home','Leave a note','Wait another hour'],a:0},
{q:'A member no-show is reported to the care manager within…',options:['24 hours','7 days','30 days','Never'],a:0},
{q:'Staying past the authorized hours because the member asked is…',options:['Unpaid and a red flag — call the office first','Good customer service','Required','Fine if under an hour'],a:0},
{q:'Which is a goal on the DSP reliability scorecard?',options:['Zero no-call/no-shows','Longest visits','Most members','Fewest notes'],a:0}]
});
