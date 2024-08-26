import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizationRoutingModule } from './visualization-routing.module';
import { VisualizeCnnComponent } from './visualize-cnn/visualize-cnn.component';

@NgModule({
    declarations: [VisualizeCnnComponent],
    imports: [CommonModule, VisualizationRoutingModule],
    bootstrap: [VisualizeCnnComponent],
})
export class VisualizationModule {}
