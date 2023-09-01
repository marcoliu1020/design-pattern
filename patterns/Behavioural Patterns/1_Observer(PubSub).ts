// It's common for different components of an app to respond to events or state changes,
// but how can we communicate these events? The Observer pattern is a popular solution.
// We have a Subject (aka Publisher) which will be the source of events.
// And we could have multiple Observers (aka Subscribers) which will recieve events from the Subject in realtime.

// interface of subscriber
interface Subscriber {
  sendNotification(channel: string, event: string): void
}

class YoutubeChannel {
  public name: string
  private subscribers: Subscriber[]

  constructor(name: string) {
    this.name = name;
    this.subscribers = [];
  }

  public subscribe(subscriber: Subscriber): void {
    this.subscribers.push(subscriber);
  }

  public notify(event: string): void {
    for (const sub of this.subscribers) sub.sendNotification(this.name, event);
  }
}


class YoutubeUser implements Subscriber {
  name: string

  constructor(name: string) {
    this.name = name;
  }

  public sendNotification(channel: string, event: string): void {
    console.log(`User ${this.name} received notification from ${channel}: ${event}`);
  }
}

const channel = new YoutubeChannel("neetcode");

channel.subscribe(new YoutubeUser("sub1"));
channel.subscribe(new YoutubeUser("sub2"));
channel.subscribe(new YoutubeUser("sub3"));

channel.notify("A new video released");
