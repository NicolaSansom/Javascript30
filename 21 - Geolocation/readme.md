# Lessons learnt

In this episode we look into geolocation more specifically the additional information that comes along with this API. Creating a compass.

## Setting up the environment

As we are making use of the additional data such as speed we needed to be able simulate movement which cannot be easily done on chrome so we had to use a similator within xcode this is something I have never done before it was interesting and surprisingly straight forward to set up.

It's also worth remembering that this API requires a https connection we were able to get this by using browersync

## Navigator

When using the geolocation API there are two methods we can choose from `watchPosition` & `getPostion` in are case we used watch as we needed data quiet frequently

## Data returned

Some of the bits of data we get from  `watchPosition` are `speed` the phone is moving. `heading` degrees relative to north, as well as the latitude / longitude values which we could use when ploting on a map.

## Piping data to become visable to the user

We use textContent to directly update the speed on screen using `querySelector` to get node via class

### Print speed

```javascript
  speed.textContent = Math.round(data.coords.speed);
```

### Update compass

To animate the compass we used css transform animation, as the heading value was already a 360 degree value we not need to tranform the data just pipe that in.

```javascript
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
```

Lastly we added an error in case the user did not allow use of location
