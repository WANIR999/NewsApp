import mutations from '@/store/mutations'

    describe('testin the mutations', () => {
        let item= {
          "source": {
              "id": "engadget",
              "name": "Engadget"
          },
          "author": "Mariella Moon",
          "title": "Beats Studio Buds+ leak on Amazon with a May 18th release date",
          "description": "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ — the page even allowed customers to pre-order the earbuds until it was yanked offline. The earbu…",
          "url": "https://www.engadget.com/beats-studio-buds-leak-on-amazon-with-a-may-18th-release-date-091639570.html",
          "urlToImage": "https://s.yimg.com/uu/api/res/1.2/gP2crGO5235WlAW8JtSefg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d71767a0-e408-11ed-ade5-2f185ffd3c47.cf.jpg",
          "publishedAt": "2023-04-26T09:16:39Z",
          "content": "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ the page even allowed customers to pr… [+1587 chars]"
      }
        let favList= [{
          "source": {
              "id": "engadget",
              "name": "Engadget"
          },
          "author": "Mariella Moon",
          "title": "Beats Studio Buds+ leak on Amazon with a May 18th release date",
          "description": "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ — the page even allowed customers to pre-order the earbuds until it was yanked offline. The earbu…",
          "url": "https://www.engadget.com/beats-studio-buds-leak-on-amazon-with-a-may-18th-release-date-091639570.html",
          "urlToImage": "https://s.yimg.com/uu/api/res/1.2/gP2crGO5235WlAW8JtSefg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/d71767a0-e408-11ed-ade5-2f185ffd3c47.cf.jpg",
          "publishedAt": "2023-04-26T09:16:39Z",
          "content": "Beats might release its next-gen Studio Buds model on May 18th. MacRumors spotted an Amazon listing that showed images and details for Apple's Beats Studio Buds+ the page even allowed customers to pr… [+1587 chars]"
      }]
      let state= {
        favorites:[],
        id:0,
       }

    it('should increment the id state', () => {
        mutations.incId(state)
        expect(state.id).toBe(1)
      
    });

    it('should push item into the favorites state', () => {
        mutations.addFav(state,item)
        expect(state.favorites).toEqual([item])
      
    });
    it('should push item into the favorites state', () => {
        mutations.defineFavList(state,favList,5)
        expect(state.favorites).toEqual(favList)
        expect(state.id).toBe(5)
      
    })


})
    