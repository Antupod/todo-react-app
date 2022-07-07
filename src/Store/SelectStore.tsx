import {makeAutoObservable} from 'mobx'
import ISelect from '../Types/ISelect'

class SelectStore {
  public options: ISelect[] = [
    {value: 'all', text: 'Все задачи'},
    {value: 'active', text: 'Незавершенные задачи'},
    {value: 'inactive', text: 'Завершенные задачи'}
  ]

  public selectedOption: string = 'all'

  constructor() {
    makeAutoObservable(this)
  }

  getSelectedSort(sort: string): void {
    this.selectedOption = sort
  }
}

export default new SelectStore()