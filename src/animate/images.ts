import { trigger, state, style, animate, transition, } from '@angular/animations';

export const imageShow =
    trigger('imageShow', [
        state('start', style({ opacity: 0 })),
        state('end', style({ opacity: 1 })),
        transition('start=>end',animate(600))
    ])