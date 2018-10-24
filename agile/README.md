SAFe version of Weighted Shortest Job First - algorithm problem
===============================================================

## Introduction

## Summary of rules for SAFe version of WSJF

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
priority list. The *User-biz value* of feature-c is 0.5, so we will need to
multiply all values in this column by 2 (so that the smallest value in the
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
- changed the WSJF score of the other features?
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

But the SAFe WSJF documentation says *"With relative estimating, you look
at one column at a time, set the smallest item to a “one,” and then set
the others relative to that."*

That statement forces the above 3 values (columns) to have arbitrary
weights (i.e. magnification factors) every time we add a new feature
which has a smaller value than "one" because we must multiply all
other values by N (where N>1) in that column so that the new
smallest-value in the column is "one".

### Issue 2 - Can one number tell you about 3 different components of Cost of Delay?

### Question - Is WSJF the always the best method to determine feature priorities?

### Alternatives

## References
- [SAFe version of Weighted Shortest Job First](https://www.scaledagileframework.com/wsjf/)

I cannot believe that I can be the only person to find a flaw in the
SAFe version of the WSJF algorithm. So I looked and found that a few
others also are unhappy with it.
- [Problems I have with SAFe-style WSJF](http://jchyip.blogspot.com/2012/12/problems-i-have-with-saf-style-wsjf.html)
- [Urgency Profiles](http://blackswanfarming.com/urgency-profiles/)
- [SAFe and Weighted Shortest Job First](http://blackswanfarming.com/safe-and-weighted-shortest-job-first-wsjf/)

