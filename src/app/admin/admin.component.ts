import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User, UsersService } from '../users.service';
import { CrimeInfoServiceService } from '../crime-info-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  Users: User[] = [];
  name: string = '';
  gender: string = 'male';
  date: string = '';
  sub: string = 'no committed a crime';
  active!: number;
  imageUrl = '';
  jokeName: string = '';
  jokeDescriptions: string = '';
  constructor(
    private usersService: UsersService,
    private crimeInfoServices: CrimeInfoServiceService
  ) {}

  createNewUser() {
    this.usersService.addUser(
      this.name,
      this.gender,
      this.date,
      this.sub,
      this.active,
      this.imageUrl,
      this.jokeName = this.getRandomCrime().name,
      this.jokeDescriptions = this.getRandomCrime().description,

    );
    this.name = '';
    console.log(this.date);


  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  crimeInfo(item: User) {
    console.log(item);
    this.crimeInfoServices.activeCrimeInfo(item);
    this.usersService.toggleActiveCrimeInfo();
  }

  ngOnInit(): void {
    this.Users = this.usersService.getUsers();
  }

  funnyCrimes = [
    {
      name: 'Sock Mismatch Misdemeanor',
      description: "Wearing socks that don't match.",
    },
    {
      name: 'Cereal Killer Culprit',
      description: "Finishing the last of someone's favorite cereal.",
    },
    {
      name: 'Remote Control Heist',
      description: 'Hiding the TV remote to claim control over the TV.',
    },
    {
      name: 'Laundry Day Lunacy',
      description: 'Wearing inside-out clothes due to laundry procrastination.',
    },
    {
      name: 'Ice Cream Vanishing Act',
      description: 'Finishing the entire tub of ice cream in one sitting.',
    },
    {
      name: 'Toothpaste Tube Twist',
      description: 'Squeezing the toothpaste tube from the middle.',
    },
    {
      name: 'Candy Wrapper Conspiracy',
      description:
        'Leaving empty candy wrappers lying around to confuse others.',
    },
    {
      name: 'Bedtime Banditry',
      description: "Stealing someone's spot in bed when they get up.",
    },
    {
      name: 'Shoelace Sabotage Scheme',
      description: 'Tying shoelaces together for laughs.',
    },
    {
      name: 'Fridge Magnet Mayhem',
      description: 'Rearranging fridge magnets to spell out silly phrases.',
    },
    {
      name: 'Sour Candy Sneak Attack',
      description:
        'Offering sour candy to unsuspecting friends without warning.',
    },
    {
      name: 'Jigsaw Puzzle Peril',
      description: 'Hiding a crucial puzzle piece to prolong the game.',
    },
    {
      name: 'Pillow Plunder',
      description: "Taking a roommate's favorite pillow without consent.",
    },
    {
      name: 'Banana Booby Trap',
      description:
        'Laying banana peels on the floor to create a slippery pathway.',
    },
    {
      name: 'Bubble Wrap Booby Trap',
      description:
        'Laying bubble wrap on the floor to make it impossible to walk quietly.',
    },
    {
      name: 'Couch Cushion Caper',
      description: "Hiding someone's phone in the couch cushions as a prank.",
    },
    {
      name: 'Toy Train Takeover',
      description: 'Setting up toy train tracks to block doorways as a prank.',
    },
    {
      name: 'Puzzle Piece Plunder',
      description:
        'Hiding a crucial puzzle piece to prolong the puzzle-solving process.',
    },
    {
      name: 'Sock Puppet Shenanigans',
      description: 'Putting on sock puppet shows during serious conversations.',
    },
    {
      name: 'Marshmallow Mayhem',
      description: 'Staging a marshmallow fight indoors and making a mess.',
    },
    {
      name: 'Dish Soap Dilemma',
      description: 'Using up all the dish soap and not replacing it.',
    },
    {
      name: 'Pillow Fort Contraband',
      description: 'Building a pillow fort without proper permits.',
    },
    {
      name: 'Spongebob Squarepants',
      description:
        'Cutting sponge pieces into unusual shapes to confuse the user.',
    },
    {
      name: 'Gummy Bear Gambit',
      description:
        "Hiding gummy bears inside a friend's pillowcase as a surprise.",
    },
    {
      name: 'Giggle Gas',
      description:
        "Releasing laughing gas into a friend's room to catch them off guard.",
    },
    {
      name: 'Silly Putty Sabotage',
      description:
        'Placing silly putty on furniture to create a sticky situation.',
    },
    {
      name: 'Paint Pot Prank',
      description:
        'Replacing paint with water in paint pots to confuse painters.',
    },
    {
      name: 'Dollhouse Disturbance',
      description: 'Rearranging furniture in a dollhouse to confuse its owner.',
    },
    {
      name: 'Bubble Bath Bustle',
      description:
        'Adding too much bubble bath solution to the bath to create a mountain of bubbles.',
    },
    {
      name: 'Rubber Band Rampage',
      description:
        'Stretching rubber bands across doorways to surprise passersby.',
    },
    {
      name: 'Screaming Soap',
      description:
        'Embedding a scream device into a bar of soap to startle unsuspecting users.',
    },
    {
      name: 'Marshmallow Mishap',
      description: 'Using marshmallows as projectiles during a pillow fight.',
    },
    {
      name: 'Banana Booby Trap',
      description:
        'Laying banana peels on the floor to create a slippery pathway.',
    },
    {
      name: 'Sour Spray',
      description: "Spraying sour spray onto unsuspecting friends' tongues.",
    },
    {
      name: 'Gum in Hair Hijinks',
      description: "Putting chewing gum in someone's hair as a prank.",
    },
    {
      name: 'Jelly Jar Jinx',
      description:
        'Gluing the lid of a jelly jar shut to make it impossible to open.',
    },
    {
      name: 'Whoopee Cushion Conspiracy',
      description: 'Placing whoopee cushions on all the chairs in a room.',
    },
    {
      name: 'Water Balloon Blitz',
      description:
        'Filling water balloons and launching them at unsuspecting targets.',
    },
    {
      name: 'Prank Call Pandemonium',
      description: 'Making prank calls to friends and family members.',
    },
    {
      name: 'Spider Scare',
      description:
        'Placing fake spiders in unexpected places to startle unsuspecting victims.',
    },
    {
      name: 'Slapstick Slip-Up',
      description:
        'Putting banana peels on the floor and pretending to slip on them.',
    },
    {
      name: 'Puzzle Piece Peril',
      description:
        'Hiding a crucial puzzle piece to prevent completion of the puzzle.',
    },
    {
      name: 'Whipped Cream Whirlwind',
      description: 'Spraying whipped cream onto unsuspecting victims.',
    },
    {
      name: 'Ding Dong Ditch',
      description:
        'Ringing doorbells and running away before anyone answers the door.',
    },
    {
      name: 'Squirt Gun Standoff',
      description: 'Engaging in a squirt gun battle with friends.',
    },
    {
      name: 'Cereal Bowl Switcheroo',
      description:
        'Switching the contents of cereal bowls before serving breakfast.',
    },
    {
      name: 'Fork Fiasco',
      description:
        'Switching the forks and spoons in the silverware drawer as a prank.',
    },
    {
      name: 'Condiment Capers',
      description: 'Unscrewing the lids of condiment bottles to create a mess.',
    },
    {
      name: 'Lawn Mower Mayhem',
      description:
        "Mowing a friend's lawn in the middle of the night as a surprise.",
    },
    {
      name: 'Bubble Wrap Booby Trap',
      description:
        'Laying bubble wrap on the floor to make it impossible to walk quietly.',
    },
    {
      name: 'Doorbell Drama',
      description: "Continuously ringing someone's doorbell until they answer.",
    },
    {
      name: 'Flour Fiasco',
      description: 'Tipping over a bag of flour to create a powdery mess.',
    },
    {
      name: 'Cotton Ball Catastrophe',
      description: 'Throwing cotton balls at unsuspecting victims.',
    },
    {
      name: 'Kitchen Gadget Gambit',
      description:
        'Hiding kitchen gadgets in unexpected places to confuse the cook.',
    },
    {
      name: 'Eggcellent Escape',
      description: "Hiding raw eggs in someone's shoes as a prank.",
    },
    {
      name: 'Shoe Swap Shenanigans',
      description: "Switching the left and right shoes in someone's closet.",
    },
    {
      name: 'Dessert Disappearance',
      description:
        "Eating someone's dessert and pretending not to know what happened to it.",
    },
    {
      name: 'Pillowcase Pillowfight',
      description:
        "Stuffing someone's pillowcase with socks to create a lumpy pillow.",
    },
    {
      name: 'Slime Surprise',
      description: "Dumping a bucket of slime on someone's head as a prank.",
    },
    {
      name: 'Bread Basket Banditry',
      description:
        'Stealing the last slice of bread from the bread basket without asking.',
    },
    {
      name: 'Jelly Bean Jamboree',
      description:
        'Spilling jelly beans all over the floor and pretending not to notice.',
    },
    {
      name: 'Couch Cushion Caper',
      description: "Hiding someone's phone in the couch cushions as a prank.",
    },
    {
      name: 'Toy Train Takeover',
      description: 'Setting up toy train tracks to block doorways as a prank.',
    },
    {
      name: 'Puzzle Piece Plunder',
      description:
        'Hiding a crucial puzzle piece to prolong the puzzle-solving process.',
    },
    {
      name: 'Sock Puppet Shenanigans',
      description: 'Putting on sock puppet shows during serious conversations.',
    },
    {
      name: 'Marshmallow Mayhem',
      description: 'Staging a marshmallow fight indoors and making a mess.',
    },
    {
      name: 'Dish Soap Dilemma',
      description: 'Using up all the dish soap and not replacing it.',
    },
    {
      name: 'Pillow Fort Contraband',
      description: 'Building a pillow fort without proper permits.',
    },
    {
      name: 'Spongebob Squarepants',
      description:
        'Cutting sponge pieces into unusual shapes to confuse the user.',
    },
    {
      name: 'Gummy Bear Gambit',
      description:
        "Hiding gummy bears inside a friend's pillowcase as a surprise.",
    },
    {
      name: 'Giggle Gas',
      description:
        "Releasing laughing gas into a friend's room to catch them off guard.",
    },
    {
      name: 'Silly Putty Sabotage',
      description:
        'Placing silly putty on furniture to create a sticky situation.',
    },
    {
      name: 'Paint Pot Prank',
      description:
        'Replacing paint with water in paint pots to confuse painters.',
    },
    {
      name: 'Dollhouse Disturbance',
      description: 'Rearranging furniture in a dollhouse to confuse its owner.',
    },
    {
      name: 'Bubble Bath Bustle',
      description:
        'Adding too much bubble bath solution to the bath to create a mountain of bubbles.',
    },
    {
      name: 'Rubber Band Rampage',
      description:
        'Stretching rubber bands across doorways to surprise passersby.',
    },
    {
      name: 'Screaming Soap',
      description:
        'Embedding a scream device into a bar of soap to startle unsuspecting users.',
    },
    {
      name: 'Marshmallow Mishap',
      description: 'Using marshmallows as projectiles during a pillow fight.',
    },
    {
      name: 'Banana Booby Trap',
      description:
        'Laying banana peels on the floor to create a slippery pathway.',
    },
    {
      name: 'Sour Spray',
      description: "Spraying sour spray onto unsuspecting friends' tongues.",
    },
    {
      name: 'Gum in Hair Hijinks',
      description: "Putting chewing gum in someone's hair as a prank.",
    },
    {
      name: 'Jelly Jar Jinx',
      description:
        'Gluing the lid of a jelly jar shut to make it impossible to open.',
    },
    {
      name: 'Whoopee Cushion Conspiracy',
      description: 'Placing whoopee cushions on all the chairs in a room.',
    },
    {
      name: 'Water Balloon Blitz',
      description:
        'Filling water balloons and launching them at unsuspecting targets.',
    },
    {
      name: 'Prank Call Pandemonium',
      description: 'Making prank calls to friends and family members.',
    },
    {
      name: 'Spider Scare',
      description:
        'Placing fake spiders in unexpected places to startle unsuspecting victims.',
    },
    {
      name: 'Slapstick Slip-Up',
      description:
        'Putting banana peels on the floor and pretending to slip on them.',
    },
    {
      name: 'Puzzle Piece Peril',
      description:
        'Hiding a crucial puzzle piece to prevent completion of the puzzle.',
    },
    {
      name: 'Whipped Cream Whirlwind',
      description: 'Spraying whipped cream onto unsuspecting victims.',
    },
    {
      name: 'Ding Dong Ditch',
      description:
        'Ringing doorbells and running away before anyone answers the door.',
    },
    {
      name: 'Squirt Gun Standoff',
      description: 'Engaging in a squirt gun battle with friends.',
    },
    {
      name: 'Cereal Bowl Switcheroo',
      description:
        'Switching the contents of cereal bowls before serving breakfast.',
    },
    {
      name: 'Fork Fiasco',
      description:
        'Switching the forks and spoons in the silverware drawer as a prank.',
    },
    {
      name: 'Condiment Capers',
      description: 'Unscrewing the lids of condiment bottles to create a mess.',
    },
    {
      name: 'Lawn Mower Mayhem',
      description:
        "Mowing a friend's lawn in the middle of the night as a surprise.",
    },
    {
      name: 'Bubble Wrap Booby Trap',
      description:
        'Laying bubble wrap on the floor to make it impossible to walk quietly.',
    },
    {
      name: 'Doorbell Drama',
      description: "Continuously ringing someone's doorbell until they answer.",
    },
    {
      name: 'Flour Fiasco',
      description: 'Tipping over a bag of flour to create a powdery mess.',
    },
    {
      name: 'Cotton Ball Catastrophe',
      description: 'Throwing cotton balls at unsuspecting victims.',
    },
    {
      name: 'Kitchen Gadget Gambit',
      description:
        'Hiding kitchen gadgets in unexpected places to confuse the cook.',
    },
    {
      name: 'Eggcellent Escape',
      description: "Hiding raw eggs in someone's shoes as a prank.",
    },
    {
      name: 'Shoe Swap Shenanigans',
      description: "Switching the left and right shoes in someone's closet.",
    },
    {
      name: 'Dessert Disappearance',
      description:
        "Eating someone's dessert and pretending not to know what happened to it.",
    },
    {
      name: 'Pillowcase Pillowfight',
      description:
        "Stuffing someone's pillowcase with socks to create a lumpy pillow.",
    },
    {
      name: 'Slime Surprise',
      description: "Dumping a bucket of slime on someone's head as a prank.",
    },
    {
      name: 'Bread Basket Banditry',
      description:
        'Stealing the last slice of bread from the bread basket without asking.',
    },
    {
      name: 'Jelly Bean Jamboree',
      description:
        'Spilling jelly beans all over the floor and pretending not to notice.',
    },
    {
      name: 'Couch Cushion Caper',
      description: "Hiding someone's phone in the couch cushions as a prank.",
    },
    {
      name: 'Toy Train Takeover',
      description: 'Setting up toy train tracks to block doorways as a prank.',
    },
    {
      name: 'Puzzle Piece Plunder',
      description:
        'Hiding a crucial puzzle piece to prolong the puzzle-solving process.',
    },
    {
      name: 'Sock Puppet Shenanigans',
      description: 'Putting on sock puppet shows during serious conversations.',
    },
    {
      name: 'Marshmallow Mayhem',
      description: 'Staging a marshmallow fight indoors and making a mess.',
    },
    {
      name: 'Dish Soap Dilemma',
      description: 'Using up all the dish soap and not replacing it.',
    },
    {
      name: 'Pillow Fort Contraband',
      description: 'Building a pillow fort without proper permits.',
    },
    {
      name: 'Spongebob Squarepants',
      description:
        'Cutting sponge pieces into unusual shapes to confuse the user.',
    },
    {
      name: 'Gummy Bear Gambit',
      description:
        "Hiding gummy bears inside a friend's pillowcase as a surprise.",
    },
    {
      name: 'Giggle Gas',
      description:
        "Releasing laughing gas into a friend's room to catch them off guard.",
    },
    {
      name: 'Silly Putty Sabotage',
      description:
        'Placing silly putty on furniture to create a sticky situation.',
    },
    {
      name: 'Paint Pot Prank',
      description:
        'Replacing paint with water in paint pots to confuse painters.',
    },
    {
      name: 'Dollhouse Disturbance',
      description: 'Rearranging furniture in a dollhouse to confuse its owner.',
    },
    {
      name: 'Bubble Bath Bustle',
      description:
        'Adding too much bubble bath solution to the bath to create a mountain of bubbles.',
    },
    {
      name: 'Rubber Band Rampage',
      description:
        'Stretching rubber bands across doorways to surprise passersby.',
    },
    {
      name: 'Screaming Soap',
      description:
        'Embedding a scream device into a bar of soap to startle unsuspecting users.',
    },
    {
      name: 'Marshmallow Mishap',
      description: 'Using marshmallows as projectiles during a pillow fight.',
    },
    {
      name: 'Banana Booby Trap',
      description:
        'Laying banana peels on the floor to create a slippery pathway.',
    },
    {
      name: 'Sour Spray',
      description: "Spraying sour spray onto unsuspecting friends' tongues.",
    },
    {
      name: 'Gum in Hair Hijinks',
      description: "Putting chewing gum in someone's hair as a prank.",
    },
    {
      name: 'Jelly Jar Jinx',
      description:
        'Gluing the lid of a jelly jar shut to make it impossible to open.',
    },
    {
      name: 'Whoopee Cushion Conspiracy',
      description: 'Placing whoopee cushions on all the chairs in a room.',
    },
    {
      name: 'Water Balloon Blitz',
      description:
        'Filling water balloons and launching them at unsuspecting targets.',
    },
    {
      name: 'Prank Call Pandemonium',
      description: 'Making prank calls to friends and family members.',
    },
    {
      name: 'Spider Scare',
      description:
        'Placing fake spiders in unexpected places to startle unsuspecting victims.',
    },
    {
      name: 'Slapstick Slip-Up',
      description:
        'Putting banana peels on the floor and pretending to slip on them.',
    },
    {
      name: 'Puzzle Piece Peril',
      description:
        'Hiding a crucial puzzle piece to prevent completion of the puzzle.',
    },
    {
      name: 'Whipped Cream Whirlwind',
      description: 'Spraying whipped cream onto unsuspecting victims.',
    },
    {
      name: 'Ding Dong Ditch',
      description:
        'Ringing doorbells and running away before anyone answers the door.',
    },
    {
      name: 'Squirt Gun Standoff',
      description: 'Engaging in a squirt gun battle with friends.',
    },
    {
      name: 'Cereal Bowl Switcheroo',
      description:
        'Switching the contents of cereal bowls before serving breakfast.',
    },
    {
      name: 'Fork Fiasco',
      description:
        'Switching the forks and spoons in the silverware drawer as a prank.',
    },
    {
      name: 'Condiment Capers',
      description: 'Unscrewing the lids of condiment bottles to create a mess.',
    },
    {
      name: 'Lawn Mower Mayhem',
      description:
        "Mowing a friend's lawn in the middle of the night as a surprise.",
    },
    {
      name: 'Bubble Wrap Booby Trap',
      description:
        'Laying bubble wrap on the floor to make it impossible to walk quietly.',
    },
    {
      name: 'Doorbell Drama',
      description: "Continuously ringing someone's doorbell until they answer.",
    },
    {
      name: 'Flour Fiasco',
      description: 'Tipping over a bag of flour to create a powdery mess.',
    },
  ];

  getRandomCrime() {
    const randomIndex = Math.floor(Math.random() * this.funnyCrimes.length);
    return this.funnyCrimes[randomIndex];
  }

  randomCrimes: { name: string, description: string }[] = [];

}
