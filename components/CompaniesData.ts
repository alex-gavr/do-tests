export interface ICompany {
  id: number;
  name: string;
  industry: string;
  averageSalary: string;
  topSalary: string;
}

const companiesData: ReadonlyArray<ICompany> = [
  {
    id: 1,
    name: 'Amazon',
    industry: 'Multi-industry company',
    averageSalary: '$101k yearly',
    topSalary: '$500k and more yearly',
  },
  {
    id: 2,
    name: 'Apple',
    industry: 'Tech company',
    averageSalary: '$143k yearly',
    topSalary: '$660K and more yearly',
  },
  {
    id: 3,
    name: 'Google',
    industry: 'Tech company',
    averageSalary: '$133k yearly',
    topSalary: '$600K and more yearly',
  },
  {
    id: 4,
    name: 'Toyota',
    industry: 'Vehicles Manufacturer',
    averageSalary: '$131k yearly',
    topSalary: '$340K and more yearly',
  },
  {
    id: 5,
    name: 'Berkshire Hathaway',
    industry: 'Multi-industry Investment company',
    averageSalary: '$131k yearly',
    topSalary: '$800K and more yearly',
  },
  {
    id: 6,
    name: 'Microsoft',
    industry: 'Tech company',
    averageSalary: '$123k yearly',
    topSalary: '$600K and more yearly',
  },
  {
    id: 7,
    name: 'Alibaba',
    industry: 'E-commerce company',
    averageSalary: '$128k yearly',
    topSalary: '$520K and more yearly',
  },
  {
    id: 8,
    name: 'Tesla',
    industry: 'Vehicles Manufacturer',
    averageSalary: '$110k yearly',
    topSalary: '$750K and more yearly',
  },
  {
    id: 9,
    name: 'NVIDIA',
    industry: 'Software company',
    averageSalary: '$143k yearly',
    topSalary: '$450K and more yearly',
  },
  {
    id: 10,
    name: 'Visa',
    industry: 'Financial Services company',
    averageSalary: '$145k yearly',
    topSalary: '$360K and more yearly',
  },
  {
    id: 11,
    name: 'Meta (Facebook)',
    industry: 'Tech company',
    averageSalary: '$141k yearly',
    topSalary: '$500K and more yearly',
  },
  {
    id: 12,
    name: 'Louis Vuitton',
    industry: 'Fashion company',
    averageSalary: '$82k yearly',
    topSalary: '$832k and more yearly',
  },
];

export default companiesData;
