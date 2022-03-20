import { IBlogPost } from "./command.types";

namespace Command {
  export class BlogUtility {
    static dateToHumanize() {}
    static titleToSlug() {}
    static getMostViewed() {}
    static getMostFeatured() {}
  }

  export class SaveBlogPost implements IBlogPost {
    execute(params: any) {
      BlogUtility.titleToSlug();
      this.save();
    }

    private save() {
      // save to db
    }
  }
  export class UpdateBlogPost implements IBlogPost {
    execute(params: any) {
      BlogUtility.titleToSlug();
      this.update();
    }

    private update() {
      // update to db
    }
  }
  export class GetBlogPost implements IBlogPost {
    execute(singlePost: boolean) {
      BlogUtility.dateToHumanize();

      if (singlePost) {
        this.getPost();
      } else {
        this.getPosts();
      }
    }

    private getPost() {
      // find a post in db
    }

    private getPosts() {
      // find posts in db
    }
  }
}

export function bootstrapCommand() {
  const save = new Command.SaveBlogPost();
  save.execute({ title: "aaa" }); // will save

  const getPost = new Command.GetBlogPost();
  getPost.execute(true); // will get a post
}
