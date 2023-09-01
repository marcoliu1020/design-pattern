// It's common for different components of an app to respond to events or state changes,
// but how can we communicate these events? The Observer pattern is a popular solution.
// We have a Subject (aka Publisher) which will be the source of events.
// And we could have multiple Observers (aka Subscribers) which will recieve events from the Subject in realtime.

// interface of subscriber
class Subscriber {
  sendNotification(channel, event) {}
}

class YoutubeChannel {
  constructor(name:string) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(sub) {
    this.subscribers.push(sub);
  }

  notify(event) {
    for (const sub of this.subscribers) sub.sendNotification(this.name, event);
  }
}

type

class YoutubeUser extends Subscriber {
  constructor(name) {
    super();
    this.name = name;
  }

  sendNotification(channel, event) {
    console.log(`User ${this.name} received notification from ${channel}: ${event}`);
  }
}

channel = new YoutubeChannel("neetcode");

channel.subscribe(new YoutubeUser("sub1"));
channel.subscribe(new YoutubeUser("sub2"));
channel.subscribe(new YoutubeUser("sub3"));

channel.notify("A new video released");
