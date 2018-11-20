SAFe version of Weighted Shortest Job First - algorithm problem
===============================================================

## Introduction

I've recently been introduced to WSJF (Weighted Shortest Job First)
as part of the Agile method of project management. WSJF is used
to assign priorities to features or epics in your scrum backlog.
I can imagine that having a method to determine priorities for such
units of work is a good idea. I suspect that WSJF **in principle**
is a reasonable method to achive this. However I feel the SAFe
(Scaled Agile Framework) version have the details wrong and this
results in unexpected priority outcomes in a variety of circumstances.

**So what I am claiming?** I am claiming:
- the algorithm for the SAFe version of WSJF is poor and may not meet
  your expectations
- the reason is that SAFe is using a poor method of calculating Cost
  of Delay (in other words, I don't like their mathematics)

**What am I not claiming?** I am not trying to suggest that using a
different method to calculate WSJF or Cost of Delay will yield poor
results. In fact I suspect that both WSJF and Cost of Delay may be
very good tools if used correctly and if you are in a position to
model Cost of Delay in a reasonable an consistent way.

## Summary of rules for SAFe version of WSJF

WSJF is defined as:

> WSJF = (Cost of Delay) divided by (Job Duration)

I don't have a background in project management or economics, but this
component of the equation seems fine to me. However, the SAFe (Scaled
Agile Framework) version of this equation goes on say that [1]:

Cost Of Delay =
- User-business value, plus
- Time criticality, plus
- Risk reduction and/or opportunity enablement value

and also [2]:

> Moreover, since we are in a continuous flow and should have a large
> enough backlog to choose from, we needn’t worry about the absolute numbers.

and also [3]:

> With relative estimating, you look at one column at a time, set the
> smallest item to a “one,” and then set the others relative to that.

***I claim these statements are flawed!***

## Example 1: Completing a high-priority feature can magically change the priority of the remaining features!

Below is a project which consists of 3 features. In what order should we
implement the features according to the SAFe WSJF?

Feature | User-biz value | Time crit'y | Risk red'n/ Opp En | Cost Of Delay | Duration | WSJF
:------ | -------------: | ----------: | -----------------: | ------------: | -------: | ---: 
a       |              2 |          13 |                  1 |            16 |        1 |   16
b       |             20 |           1 |                  1 |            22 |        1 |   22
c       |              1 |          13 |                 13 |            27 |        1 |   27

The SAFe WSJF score tells us to:
- do feature-c first, then
- do feature-b second, then
- do feature-a last

Hence:
- let's perform feature-c and complete it then cross it off our list of
  priorities
- after doing so we no longer have a "1" in the "User-biz value" column,
  so let's re-scale this column so that we do have a "1" (by dividing all
  the values in the column by 2)

Feature | User-biz value | Time crit'y | Risk red'n/ Opp En | Cost Of Delay | Duration | WSJF
:------ | -------------: | ----------: | -----------------: | ------------: | -------: | ---: 
a       |              1 |          13 |                  1 |            15 |        1 |   15
b       |             10 |           1 |                  1 |            12 |        1 |   12

The SAFe WSJF score tells us to:
- do feature-a next, then
- do feature-b last

***BUT WAIT***, our first table told us that feature-b should be done
before feature-a! How is it possible that removing an independent
feature from our feature-list has:
- changed the WSJF score of the remaining features?
- changed the priority order of the remaining features?


## Example 2: Adding a low priority feature can magically change the order of high priority features!

Below is a project which consists of 2 features. In what order should we implement the
features according to the SAFe WSJF?

Feature | User-biz value | Time crit'y | Risk red'n/ Opp En | Cost Of Delay | Duration | WSJF
:------ | -------------: | ----------: | -----------------: | ------------: | -------: | ---: 
a       |              1 |          13 |                  1 |            15 |        1 |   15
b       |             10 |           1 |                  1 |            12 |        1 |   12

The SAFe WSJF score tells us to:
- do feature-a first
- do feature-b second

Hence, let's start working on feature-a.

Part way through the work a stakeholder points out that they have thought of
new feature (i.e. feature-c) which would be nice to have, but is less
valuable than the 2 features on the agenda. So let's add feature-c to our
priority list. The *User-biz value* of feature-c is 0.5 (i.e. the User-biz
value is half of feature-a's User-biz value) so we will need to multiply all
existing values in this column by 2 (so that the smallest value in the
column is 1).

Feature | User-biz value | Time crit'y | Risk red'n/ Opp En | Cost Of Delay | Duration | WSJF
:------ | -------------: | ----------: | -----------------: | ------------: | -------: | ---: 
a       |              2 |          13 |                  1 |            16 |        1 |   16
b       |             20 |           1 |                  1 |            22 |        1 |   22
c       |              1 |           2 |                  3 |             6 |        1 |    6

The SAFe WSJF score tells us to:
- do feature-b first
- do feature-a second
- do feature-c last

***BUT WAIT***, our first table told us that feature-a should be done
before feature-b! How is it possible that adding an independent
low-value feature to our feature-list has:
- changed the WSJF score of the other (in this case high-valued) features?
- changed the priority order of the other features?


## The SAFe Cost Of Delay calculation is flawed

WSJF relies on a reliable calculation for Cost Of Delay, and I claim that the SAFe version
of Cost Of Delay is **invalid**. SAFe claims it can be calculated by adding:
- User-business value,
- Time criticality, and
- Risk reduction and/or opportunity enablement value

### Issue - Units

I claim that adding these values is guaranteed to be meaningless unless
they all have the same units.

> Analogy: You cannot add the value for kilometres to the value of miles
> to the value of light-years. Although they are all measures of distance,
> it is meaningless to sum them (unless you first convert them all to a
> common unit such as kilometres).

But the SAFe WSJF documentation says:
> With relative estimating, you look at one column at a time, set the
> smallest item to a “one,” and then set the others relative to that.

That statement forces the above 3 columns to have their weights
(i.e. magnification factors) change whenever:
- we add a new feature which has a smaller value than
  "one" because we must multiply all other values by N (where
  N>1) in that column so that the new smallest-value in the
  column is "one"
- we remove a feature corresponding the the last "one"
  in a particular column because then we must divide all other
  values by N (where N>1) in that column so that the new
  smallest-value in the column is "one"

### Issue 2 - Can one number tell you about 3 different components of Cost of Delay?

Let's say that we "fix" the equation above by doing something like
forcing the 3 columns to have the same units (eg. all 3 components
of Cost of Delay are measured in say "dollars"). This also has the
(good) side-effect of preventing the columns from having weights
(or magnification factors) which are different from each other.
Would this change make the Cost of Delay calculation work?

I cannot say. However, I think that even the "fixed" equation sets
an expection that it will give you a number which will nicely
account for:
- User-business value,
- Time criticality, and
- Risk reduction and/or opportunity enablement value

I feel it is very unlikely that one value can properly set a priority
for 3 independent values. So, at minimum I would guess that even an
equation which fixes the *units problem* is setting itself up to not
meet expectations.

### Alternative priority methods

I am not qualified to say what alternative priority scoring methods
might be reasonable. I would suggest you investigate proper and
robust methods to calculate Cost of Delay, then calculate WSJF with
one of those. I believe some are suggested in the references below.

For a small number of items in your backlog you could consider
assigning priorities with an eduacated guess (i.e. intuition).

## References
- [SAFe version of Weighted Shortest Job First](https://www.scaledagileframework.com/wsjf/)

I cannot believe that I can be the only person to find a flaw in the
SAFe version of the WSJF algorithm. So I looked and found that a few
others also are unhappy with it.

- [Problems I have with SAFe-style WSJF](http://jchyip.blogspot.com/2012/12/problems-i-have-with-saf-style-wsjf.html)
- [Urgency Profiles](http://blackswanfarming.com/urgency-profiles/)
- [SAFe and Weighted Shortest Job First](http://blackswanfarming.com/safe-and-weighted-shortest-job-first-wsjf/)

