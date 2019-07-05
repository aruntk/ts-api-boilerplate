import { Get, Route, Tags, Security } from 'tsoa'
import { ServerError } from '../utils/server-error'

export interface IWidget {
  id: number
  label: string
  color?: string
}

const widgets: IWidget[] = [
  {
    color: 'blue',
    id: 1,
    label: 'first widget',
  },
  {
    color: 'green',
    id: 2,
    label: 'second label',
  }
]

@Route('widgets')
export class WidgetsController {
  /**
   * Returns list of widgets
   **/
  @Get()
  @Tags('Widgets')
  public async GetWidgets(): Promise<IWidget[]> {
    return widgets
  }
  /**
   * Returns one widget matching the id, or returns error
   * @param widgetId The id of the widget
   **/
  @Get('{widgetId}')
  @Tags('Widgets')
  @Security('jwt')
  public async GetWidget(widgetId: number): Promise<IWidget> {
    const widget = widgets.find(w => w.id === widgetId)
    if (!widget) {
      throw new ServerError(`no widget found with id ${widgetId}`)
    }

    return widget
  }
}
