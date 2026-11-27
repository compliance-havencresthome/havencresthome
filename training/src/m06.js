HCH_MODULES.push({
id:'m06', order:6, due:'first', roles:['dsp','admin'], minutes:30, renewDays:365, pass:80,
title:'Observe, Document, Report: Visit Notes, Changes in Condition and Incidents',
refs:['DHS 105.17(1g)(c), (1w)(d)2, (3)(b)2–3','DHS P-01602 §V.2, VIII','Inclusa SHC Scope §4.0, 7.3, 7.7'],
sections:[
{title:'Observe vs. diagnose',slides:[
{h:'You are the eyes of the care team',body:`<p>A care manager sees the member once a month, maybe once a quarter. The nurse sees them when something has already gone wrong. <b>You see them three times a week.</b> You will notice the change before anyone else can.</p>
<p>That makes your observation the most valuable information in the whole system — as long as it stays an observation.</p>
<div class="callout"><b>Observe and report</b> = what you saw, heard, smelled, measured, and what the member said.<br><b>Diagnose</b> = what you think it means medically. That part belongs to the nurse and doctor.</div>`},
{h:'Observation language',body:`<table><tr><th>Diagnosing (don't)</th><th>Observing (do)</th></tr>
<tr><td>"She has a UTI."</td><td>"Urine was dark and strong-smelling; she was confused about the day, which is new; she said it burns."</td></tr>
<tr><td>"He's depressed."</td><td>"He stayed in bed, declined breakfast and the walk, said 'what's the point.' Third visit in a row."</td></tr>
<tr><td>"Her blood sugar is off."</td><td>"She was shaky and sweaty at 10:15, said she skipped breakfast. Ate crackers and juice, felt better by 10:40."</td></tr>
<tr><td>"He's getting dementia."</td><td>"Asked me the same question four times in ten minutes; didn't recognize his daughter's name. Not typical for him."</td></tr>
<tr><td>"That's a bedsore."</td><td>"Red area about the size of a quarter on the tailbone, did not fade after 15 minutes off it. Skin intact."</td></tr></table>
<p>Observations get acted on. Diagnoses get argued with.</p>`},
{h:'The baseline is everything',body:`<p>A change only means something compared to what is normal <i>for this member</i>. Learn the baseline on your first visits and from the Service Plan:</p>
<ul><li>How they walk, talk, eat, sleep, breathe at their usual.</li><li>Their usual mood and routine.</li><li>Their skin, their appetite, their bathroom pattern.</li><li>How the home normally looks.</li></ul>
<p>Then your most powerful sentence becomes: <b>"This is different from usual."</b></p>`},
{h:'Changes that must be reported the same day',body:`<ul><li>New or worse confusion, drowsiness, agitation.</li><li>Fall, near-fall, new unsteadiness.</li><li>New pain, swelling, redness, skin breakdown, bruising.</li><li>Shortness of breath, chest pain, blue lips (→ 911 if severe).</li><li>Not eating or drinking, vomiting, diarrhea, no urine, very dark urine.</li><li>Fever, chills, cough that is new.</li><li>Medication concerns: pills not taken, extra pills gone, member confused about meds.</li><li>Change in mood, talk of hopelessness or dying (→ 988 and office).</li><li>Home hazard: no heat, no food, broken equipment, unsafe person present.</li><li>Any member or family complaint, any refusal pattern.</li></ul>
<div class="callout">Emergency → 911 → office. Urgent change → office by phone today. Routine observation → visit note.</div>`,ref:'DHS 105.17(3)(b)3'}],
check:[{q:'Which is an observation rather than a diagnosis?',options:['"Member has pneumonia."','"Member coughed through the visit, said chest feels tight, breathing faster than usual, skin warm to touch."','"Member is getting sick."','"Member needs antibiotics."'],a:1,why:'Report what you saw and heard; leave the label to the nurse.'},
{q:'A member who usually chats is quiet, stays in bed and refuses lunch — for the second visit in a row. You…',options:['Note it and see what happens next week','Call the office today and document it as a change from baseline','Suggest she see a therapist','Tell the family she is depressed'],a:1,why:'Change from baseline, especially a pattern, is reported the same day.'}]},

{title:'The visit note',slides:[
{h:'Every visit gets a note — no exceptions',body:`<p>Wisconsin requires a record of every visit: what was done, what wasn't, and what you observed. The MCO can ask for it. A lawyer can ask for it. Your note is also what protects you.</p>
<p>Rule: <b>If it isn't documented, it didn't happen.</b> And the reverse: if it's documented, it had better have happened.</p>
<ul><li>Written in the Haven Crest system (EVV app / visit note) <b>before you clock out</b>, at the member's home.</li><li>Factual, specific, brief.</li><li>Never pre-written, never copied from last time, never written the next day from memory.</li></ul>`,ref:'DHS 105.17(1w)(d)2; Inclusa SHC Scope §4.0'},
{h:'What goes in',body:`<ol><li><b>Tasks completed</b> — the plan's tasks, checked.</li><li><b>Tasks not completed and why</b> — "Shower refused; wash-up at sink done instead."</li><li><b>Member's condition</b> — one or two lines against baseline. "Alert, usual self, ate full breakfast." Or the change.</li><li><b>Independence</b> — what the member did themselves. "Buttoned shirt independently."</li><li><b>Observations</b> — skin, mood, intake, home.</li><li><b>Communication</b> — "Called office 10:15 re: swelling in left ankle; spoke with Nicholas."</li><li><b>Anything unusual</b> — visitors, equipment problems, member requests outside the plan.</li></ol>`},
{h:'Writing it well',body:`<div class="do"><b>Good:</b> "9:00–11:00. Assist shower (standby, washed own front, I did back/legs). Dressed w/ setup. Breakfast: oatmeal, full, 1 cup coffee + 1 water. Walked to mailbox w/ walker, steady. Skin: heels pink, no breakdown, repositioned. Mood: cheerful, talked about grandson's visit. Laundry 1 load. No concerns."</div>
<div class="dont"><b>Poor:</b> "Did ADLs. Pt fine. Cleaned."</div>
<ul><li>Use the member's words in quotes when they describe symptoms.</li><li>Numbers beat adjectives: "drank 3 cups" not "drank well."</li><li>Never: "appears," "seems," "I think," unless followed by what you actually observed.</li><li>No abbreviations the office hasn't approved. No jokes, no nicknames.</li></ul>`},
{h:'Correcting a mistake',body:`<ul><li>Never delete or overwrite a submitted note. Add an <b>addendum</b>: "Correction to 11/3 note: breakfast was toast, not oatmeal."</li><li>Never document a task you didn't do, even if you "always" do it.</li><li>Never adjust a clock-in/out time yourself. Call the office; they log the correction with the reason (EVV requires this).</li><li>Late note? Submit it as soon as you can, marked as a late entry with the real time of writing.</li></ul>`}],
check:[{q:'A member refused her shower. In the note you…',options:['Mark shower complete, since it was on the plan','Write "shower refused; offered wash-up at sink, which she accepted"','Leave the shower line blank','Write "non-compliant"'],a:1,why:'Document the refusal, what you offered, and what happened. Never mark undone tasks done.'},
{q:'You realize yesterday\'s note has an error. You…',options:['Edit the note so it reads correctly','Add an addendum with the correction and today\'s date','Delete it and rewrite','Ignore it'],a:1,why:'Notes are never altered; corrections are added as dated addenda.'}]},

{title:'Incidents and complaints',slides:[
{h:'What counts as an incident',body:`<p>Anything out of the ordinary that affected, or could have affected, the member's health, safety or rights:</p>
<ul><li>Fall (with or without injury), near-fall.</li><li>Injury of any cause; new skin breakdown.</li><li>Medication error or concern.</li><li>Emergency services called; hospitalization; death.</li><li>Missing member; member left unattended when supervision was in the plan.</li><li>Suspected abuse, neglect, exploitation (Module 5).</li><li>Property damage or loss; theft allegation.</li><li>Threats, aggression, unsafe situation for you.</li><li>Member or family complaint.</li><li>Missed or very late visit; no-show by the member.</li></ul>`,ref:'Inclusa SHC Scope §7.7'},
{h:'Timelines you must know',body:`<table><tr><th>Event</th><th>You</th><th>Office</th></tr>
<tr><td>Emergency</td><td>911, then office immediately</td><td>Notifies care team immediately</td></tr>
<tr><td>Serious incident (injury, ER/hospital, abuse, missing member, death, unapproved restraint)</td><td>Make the member safe, 911 if needed, then <b>phone</b> the office before you leave</td><td><b>Phones the IDT immediately</b>; written report within <b>24 hours</b></td></tr>
<tr><td>Any other member incident</td><td>Call office same visit; incident report same day</td><td>Reports to MCO IDT within <b>24 hours / one business day</b></td></tr>
<tr><td>Formal complaint or grievance</td><td>Pass to office same day</td><td>Notifies MCO within <b>48 hours</b></td></tr>
<tr><td>Missed visit / no-show</td><td>Call office immediately</td><td>Reports to care team within <b>24 hours</b></td></tr>
<tr><td>Suspected abuse by a caregiver</td><td>Call office immediately</td><td>DHS 13 report to DQA within <b>7 days</b></td></tr></table>`,ref:'Inclusa/iCare SHC Scope §7.2, 7.3, 7.7; Lakeland SHC Addendum §7; Anthem FC Supplement §2–3; My Choice WI provider orientation; DHS 13.05'},
{h:'Same rule for every MCO',body:`<p>Each MCO writes its own contract, so Haven Crest follows the <b>strictest</b> version everywhere. That way nothing depends on remembering which MCO a member has.</p>
<table><tr><th>MCO</th><th>Incident to IDT</th><th>Complaint to IDT</th><th>Missed visit / change</th><th>We can't continue</th></tr>
<tr><td>Inclusa · iCare</td><td>24 h (serious: phone)</td><td>48 h</td><td>24 h</td><td>30 days</td></tr>
<tr><td>Lakeland Care</td><td>1 business day</td><td>48 h</td><td>24 h</td><td>30 days</td></tr>
<tr><td>Anthem</td><td>Immediately, ≤24 h</td><td>Support member's grievance</td><td>24 h written</td><td>30 days</td></tr>
<tr><td>My Choice Wisconsin</td><td>24 h / 1 business day</td><td>Log &amp; process</td><td>—</td><td>—</td></tr>
<tr><td>Community Care</td><td>Per DHS standards</td><td>Handbook process</td><td>—</td><td>90 days for a change in service type/scope</td></tr>
<tr><td><b>Haven Crest standard</b></td><td><b>Phone immediately if serious; written ≤24 h</b></td><td><b>48 h</b></td><td><b>24 h</b></td><td><b>30 days (90 for scope change)</b></td></tr></table>
<p>Your part never changes: <b>protect the member, call the office before you leave, write the report the same day.</b></p>`,ref:'MCO provider documents reviewed Nov 2026; see the Academy compliance crosswalk'},
{h:'The incident report',body:`<ol><li>Member name, date, time of the event and time you discovered it.</li><li>Where it happened and who was present.</li><li>What happened — facts in order. What the member said, in quotes.</li><li>What you did — first aid, calls made (to whom, at what time), what the office instructed.</li><li>Member's condition after.</li><li>Your name, signature, date/time of writing.</li></ol>
<p>Submit it the <b>same day</b>. The office investigates, follows up with the care team, and tracks the pattern — a member with three near-falls in a month needs a plan change, and only documentation makes that visible.</p>`},
{h:'Complaints are information, not insults',body:`<ul><li>Listen fully. Don't defend or explain. "Thank you for telling me — I'll make sure the office hears it today."</li><li>Report every complaint, even about you, even if you think it's unfair. The office decides.</li><li>Never try to "fix it" privately to avoid a report.</li><li>Members have the right to complain to the MCO and DHS; give them the numbers if asked.</li></ul>
<div class="callout">A complaint handled quickly and honestly builds more trust than a visit with no problems.</div>`}],
check:[{q:'A member slips to the floor but is uninjured and gets up with your help. This is…',options:['Not an incident since no one was hurt','An incident — call the office this visit and write a report today','Only reportable if it happens again','Reportable next week'],a:1,why:'Every fall or near-fall is an incident regardless of injury.'},
{q:'A member is taken to the ER during your visit. After calling 911 and the office, the office must…',options:['Phone the IDT immediately and send a written report within 24 hours','Wait for the discharge summary','Report at the monthly meeting','Email within 7 days'],a:0,why:'Serious incidents: phone the IDT immediately, written report within 24 hours — the strictest MCO rule, applied to every member.'},
{q:'The office must report a member incident to the MCO care team within…',options:['24 hours','48 hours','7 days','30 days'],a:0,why:'24 hours for incidents; 48 hours for formal complaints; 7 days for DHS 13 caregiver misconduct.'}]}],
quiz:[
{q:'"Observe and report" means you record…',options:['What you saw, heard, measured and what the member said','What you think the medical cause is','Only tasks completed','Your opinion of the family'],a:0},
{q:'A change only has meaning compared to…',options:['The member\'s own baseline','Other members','The DSP\'s own health','The family\'s description'],a:0},
{q:'Which must be reported to the office the same day?',options:['New confusion that is unusual for the member','The member watched a different TV show','The member chose a blue shirt','The mail came late'],a:0},
{q:'When is the visit note written?',options:['Before clocking out, at the member\'s home','The next morning','At the end of the week','Only when something happens'],a:0},
{q:'"Did ADLs. Pt fine." is a poor note because…',options:['It has no specifics, no observations and no evidence of what was done','It is too long','It uses the member\'s name','It lists tasks'],a:0},
{q:'To fix an error in a submitted note you…',options:['Add a dated addendum','Edit the original','Delete and rewrite','Ask the member to sign'],a:0},
{q:'You may adjust your own EVV clock-in time…',options:['Never — call the office, which logs the correction and reason','Within 15 minutes','If you forgot','If the member agrees'],a:0},
{q:'A near-fall with no injury is…',options:['An incident that is reported and documented','Not reportable','Reportable only to family','Reportable monthly'],a:0},
{q:'Formal complaints must reach the MCO within…',options:['48 hours','24 hours','7 days','14 days'],a:0},
{q:'A DHS 13 caregiver misconduct report is due to DQA within…',options:['7 days','24 hours','48 hours','30 days'],a:0},
{q:'A member complains about a co-worker. You…',options:['Listen, thank them, and report it to the office the same day','Defend the co-worker','Tell the co-worker directly','Keep it to yourself'],a:0},
{q:'"Drank 3 cups of water" is better than "drank well" because…',options:['Numbers are objective and comparable over time','It is shorter','It sounds medical','The MCO requires cups'],a:0}]
});
