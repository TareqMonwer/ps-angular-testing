import { MessageService } from "./message.service"

describe('MessageService', () => { 
    let service: MessageService;

    beforeEach(() => {
        service  = new MessageService();
    })

    it('should have no messages at the beginning', () => {
        expect(service.messages.length).toEqual(0);
    })

    it('should add new message item to the existing messages', () => {        
        let messageText = "first message";
        service.add(messageText);
        expect(service.messages.length).toEqual(1);
    })

    it('should verify clear method removes all the messages', () => {
        service.add('one');
        service.add('two');
        expect(service.messages.length).toBe(2);
        
        service.clear();
        expect(service.messages.length).toBe(0);
    })
})