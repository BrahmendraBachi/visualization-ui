import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeCnnComponent } from './visualize-cnn.component';

describe('VisualizeCnnComponent', () => {
    let component: VisualizeCnnComponent;
    let fixture: ComponentFixture<VisualizeCnnComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VisualizeCnnComponent],
        });
        fixture = TestBed.createComponent(VisualizeCnnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
